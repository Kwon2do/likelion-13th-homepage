import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { ResumeComponent } from "./Resume"; // ResumeComponent import
interface Application {
  part: string;
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
      <h2 style={{ color: "#ff7710" }}>지원자 목록</h2>
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
            <ResumeComponent
              key={app.id}
              name={app.name}
              studentId={app.studentId}
              phone={app.phone}
              major={app.major}
              grade={app.grade}
              status={app.status}
              part={app.part}
              question1={app.question1}
              question2={app.question2}
              question3={app.question3}
              question4={app.question4}
              portfolio={app.portfolio}
              renderStatus={renderStatus}
            />
          ))}
        </>
      )}
    </PageWrapper>
  );
};

export default ApplicationList;

export const PageWrapper = styled.div`
  padding: 100px 20px 20px;
  background-color: black;
  min-height: calc(100vh - 100px);
  box-sizing: border-box;
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
