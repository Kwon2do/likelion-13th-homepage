import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

interface ResumeProps {
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
  renderStatus: (status: string) => string;
}

const ResumeComponent: React.FC<ResumeProps> = ({
  name,
  studentId,
  phone,
  major,
  grade,
  status,
  question1,
  question2,
  question3,
  question4,
  portfolio,
  renderStatus,
}) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch(portfolio);
        if (!response.ok) {
          throw new Error("Failed to fetch PDF");
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
        console.log(url);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    if (portfolio.endsWith(".pdf")) {
      fetchPDF();
    }
  }, [portfolio]);

  return (
    <ResumeCard>
      <h3>
        {name} ({studentId})
      </h3>
      <p>
        <strong>휴대폰 번호:</strong> {phone}
      </p>
      <p>
        <strong>전공:</strong> {major}
      </p>
      <p>
        <strong>학년:</strong> {grade}
      </p>
      <p>
        <strong>상태:</strong> {renderStatus(status)}
      </p>
      <p>
        <strong>질문 1:</strong> {question1}
      </p>
      <p>
        <strong>질문 2:</strong> {question2}
      </p>
      <p>
        <strong>질문 3:</strong> {question3}
      </p>
      <p>
        <strong>질문 4:</strong> {question4}
      </p>
      <PortfolioWrapper>
        <strong>포트폴리오 미리보기:</strong>
        {blobUrl ? (
          <EmbedWrapper src={blobUrl} type="application/pdf" />
        ) : (
          <p>PDF를 불러오는 중입니다...</p>
        )}
      </PortfolioWrapper>
    </ResumeCard>
  );
};

export default ResumeComponent;

const ResumeCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PortfolioWrapper = styled.div`
  margin-top: 20px;
`;

const EmbedWrapper = styled.embed`
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;
