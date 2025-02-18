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
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  useEffect(() => {
    if (authenticated) {
      fetchApplications();
    }
  }, [authenticated]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const url = `https://port-0-likelion-13th-homepage-m6xxoqjg3249c6c2.sel4.cloudtype.app/applications`;
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Application[] = await response.json();
      setApplications(data);
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

  // 지원자 수 계산
  const totalCount = applications.length;
  const frontendCount = applications.filter(
    (app) => app.part === "프론트엔드"
  ).length;
  const backendCount = applications.filter(
    (app) => app.part === "백엔드"
  ).length;
  const designCount = applications.filter(
    (app) => app.part === "기획/디자인"
  ).length;

  // 검색 & 카테고리 필터링
  const filteredApplications = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "전체" || app.part === selectedCategory)
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

      {/* 카테고리 및 전체 개수 표시 */}
      <CategoryContainer>
        <CategoryButton
          selected={selectedCategory === "전체"}
          onClick={() => setSelectedCategory("전체")}
        >
          전체 ({totalCount})
        </CategoryButton>
        <CategoryButton
          selected={selectedCategory === "프론트엔드"}
          onClick={() => setSelectedCategory("프론트엔드")}
        >
          프론트엔드 ({frontendCount})
        </CategoryButton>
        <CategoryButton
          selected={selectedCategory === "백엔드"}
          onClick={() => setSelectedCategory("백엔드")}
        >
          백엔드 ({backendCount})
        </CategoryButton>
        <CategoryButton
          selected={selectedCategory === "기획/디자인"}
          onClick={() => setSelectedCategory("기획/디자인")}
        >
          기획/디자인 ({designCount})
        </CategoryButton>
      </CategoryContainer>

      {/* 검색창 */}
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
              renderStatus={(status) =>
                status === "1"
                  ? "재학중"
                  : status === "2"
                  ? "휴학중"
                  : status === "3"
                  ? "초과학기"
                  : status === "4"
                  ? "졸업유예"
                  : "알 수 없음"
              }
            />
          ))}
        </>
      )}
    </PageWrapper>
  );
};

export default ApplicationList;

const PageWrapper = styled.div`
  padding: 100px 20px 20px;
  background-color: black;
  min-height: calc(100vh - 100px);
  box-sizing: border-box;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e1e;
  color: white;
`;

const SearchWrapper = styled.div`
  margin-bottom: 20px;
  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button<{ selected: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#ff7710" : "#555")};
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${(props) => (props.selected ? "#e65c00" : "#777")};
  }
`;
