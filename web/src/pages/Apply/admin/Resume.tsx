// ResumeComponents.tsx
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
// --------------------
// 1. 타입 및 ResumeComponent
// --------------------
export interface ResumeProps {
  name: string;
  studentId: string;
  phone: string;
  major: string;
  grade: string;
  status: string;
  part: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  portfolio: string; // PDF 파일 URL
  renderStatus: (status: string) => string;
  /** 미리보기 모드 (슬라이더 등에서 사용) */
  isPreview?: boolean;
}

export const ResumeComponent: React.FC<ResumeProps> = ({
  name,
  studentId,
  phone,
  major,
  grade,
  status,
  part,
  question1,
  question2,
  question3,
  question4,
  portfolio,
  renderStatus,
  isPreview = false,
}) => {
  return (
    <ResumeCard preview={isPreview}>
      <h3>
        {name} ({studentId}) {part}
      </h3>
      <p>
        <strong>연락처</strong>
        <br />
        {phone}
      </p>
      <p>
        <strong>학적</strong>
        <br />
        {major} {grade}학년 {renderStatus(status)}
      </p>
      <p>
        <strong>Q1. 멋쟁이사자처럼에 지원하신 동기가 무엇인가요?</strong>
        <br />
        {question1}
      </p>
      <p>
        <strong>
          Q2. 지원하신 파트 역량과 성장하기 위해 어떤 노력을 해오셨는지
          설명해주세요.
        </strong>
        <br />
        {question2}
      </p>
      <p>
        <strong>
          Q3. 멋쟁이사자처럼 활동을 통해 얻고자 하는 경험이나 목표를
          설명해주세요.
        </strong>
        <br />
        {question3}
      </p>
      <p>
        <strong>
          Q4. 현재 참여 중이거나 올해 계획된 대외활동, 아르바이트, 인턴 등이
          있다면 모두 작성해주세요.
          <br />
          (없다면 '없음' 기재) 위 활동과 병행하면서도 ‘멋쟁이사자처럼’ 활동에
          충분히 시간을 투자할 수 있다고 생각하시나요? 가능하다면, 시간 관리를
          어떻게 할 계획인지 설명해주세요.
        </strong>
        <br />
        {question4}
      </p>

      <PortfolioWrapper>
        <strong>포트폴리오</strong>
        <br />
        <a href={portfolio}>포트폴리오 다운로드</a>
      </PortfolioWrapper>
    </ResumeCard>
  );
};

// --------------------
// 2. PDF 미리보기 컴포넌트 (React-PDF 사용 + Blob 방식)
// --------------------
interface PdfViewerProps {
  pdfUrl: string; // 서버 상의 PDF 다운로드 주소
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  // fetch로 받아온 Blob의 임시 URL
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number>(0);

  // 1) 서버에서 PDF 파일을 Blob으로 받은 뒤, createObjectURL로 변환
  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch PDF");
        }
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setPdfBlobUrl(objectUrl);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };
    fetchPDF();
  }, [pdfUrl]);

  // 2) PDF 로드 성공 시, 전체 페이지 수 세팅
  const onDocumentLoadSuccess = (pdf: any) => {
    console.log("PDF 로드 성공. 페이지 수:", pdf.numPages);
    setNumPages(pdf.numPages);
  };

  return (
    <PdfContainer>
      {/* pdfBlobUrl이 준비되면 <Document>에 넣어 React-PDF로 렌더링 */}
      {pdfBlobUrl ? (
        <Document
          file={pdfBlobUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="PDF를 불러오는 중입니다..."
        >
          {/* PDF 전체 페이지 반복 렌더링 */}
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={600}
            />
          ))}
        </Document>
      ) : (
        <p>PDF를 불러오는 중입니다...</p>
      )}
    </PdfContainer>
  );
};

// --------------------
// 3. 스타일 정의
// --------------------
const ResumeCard = styled.div<{ preview?: boolean }>`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;

  box-shadow: ${(props) =>
    props.preview
      ? "0 4px 12px rgba(0, 0, 0, 0.3)"
      : "0 2px 4px rgba(0, 0, 0, 0.1)"};
  transform: ${(props) => (props.preview ? "scale(0.9)" : "scale(1)")};
  opacity: ${(props) => (props.preview ? 0.7 : 1)};
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

const PortfolioWrapper = styled.div`
  margin-top: 20px;
`;

// PDF 뷰어 영역 (스크롤 등 필요시 조정)
const PdfContainer = styled.div`
  width: 100%;
  max-height: 800px; /* 세로 길이 제한이 필요한 경우 */
  overflow-y: auto;

  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;
