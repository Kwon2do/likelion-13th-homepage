import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

interface Application {
  id: number;
  name: string;
  studentId: string;
  phone: string;
  major: string;
  grade: string;
  status: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  portfolio: string;
}

const ApplicationList: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const itemsPerPage = 5;
  const [lastId, setLastId] = useState<number | null>(null);

  useEffect(() => {
    if (authenticated) {
      fetchApplications();
    }
  }, [authenticated]);

  const fetchApplications = async (reset: boolean = false) => {
    if (reset) setLastId(null);

    try {
      setLoading(true);
      let url = `https://port-0-likelion-13th-homepage-m6xxoqjg3249c6c2.sel4.cloudtype.app/applications?limit=${itemsPerPage}`;
      if (lastId) url += `&lastId=${lastId}`;

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Application[] = await response.json();
      setApplications((prev) => (reset ? data : [...prev, ...data]));

      if (data.length > 0) {
        setLastId(data[data.length - 1].id);
      }
    } catch (err: any) {
      setError(err.message);
      console.error("Error fetching applications:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "20250210") {
      setAuthenticated(true);
    } else {
      alert("비밀번호가 올바르지 않습니다.");
    }
  };

  const renderStatus = (status: string) => {
    switch (status) {
      case "1":
        return "재학중";
      case "2":
        return "휴학중";
      case "3":
        return "초과학기";
      case "4":
        return "졸업유예";
      default:
        return "알 수 없음";
    }
  };

  const filteredApplications = applications.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!authenticated) {
    return (
      <LoginWrapper>
        <h2>비밀번호 입력</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">확인</button>
        </form>
      </LoginWrapper>
    );
  }

  return (
    <PageWrapper>
      <h2>지원자 목록</h2>
      <SearchWrapper>
        <input
          type="text"
          placeholder="이름으로 검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchWrapper>
      {loading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p style={{ color: "red" }}>오류 발생: {error}</p>
      ) : (
        <>
          {filteredApplications.map((app) => (
            <ResumeCard key={app.id}>
              <h3>
                {app.name} ({app.studentId})
              </h3>
              <p>
                <strong>휴대폰 번호:</strong> {app.phone}
              </p>
              <p>
                <strong>전공:</strong> {app.major}
              </p>
              <p>
                <strong>학년:</strong> {app.grade}
              </p>
              <p>
                <strong>상태:</strong> {renderStatus(app.status)}
              </p>
              <p>
                <strong>질문 1:</strong> {app.question1}
              </p>
              <p>
                <strong>질문 2:</strong> {app.question2}
              </p>
              <p>
                <strong>질문 3:</strong> {app.question3}
              </p>
              <p>
                <strong>질문 4:</strong> {app.question4}
              </p>
              <p>
                <strong>포트폴리오:</strong>{" "}
                <a
                  href={app.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  포트폴리오 보기
                </a>
              </p>
            </ResumeCard>
          ))}
          <PaginationWrapper>
            <button onClick={() => fetchApplications()} disabled={loading}>
              더 불러오기
            </button>
          </PaginationWrapper>
        </>
      )}
    </PageWrapper>
  );
};
export default ApplicationList;
export const PageWrapper = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

export const ResumeCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    padding: 10px 20px;
    border: none;
    background-color: #ff7710;
    color: white;
    cursor: pointer;
    &:disabled {
      background-color: #ccc;
    }
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e1e;
  color: white;
`;

export const SearchWrapper = styled.div`
  margin-bottom: 20px;
  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`;
