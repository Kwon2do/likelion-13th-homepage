// ResumeComponents.tsx
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Document, Page, pdfjs } from "react-pdf";

// cdnjs에서 제공하는 사용 가능한 버전 번호를 직접 지정합니다.
// (예시: 2.16.105 버전)
// https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js 가 실제로 로드되는지 확인하세요.
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

// --------------------
// 1. ResumeComponent (지원서 컴포넌트)
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
  portfolio: string;
  renderStatus: (status: string) => string;
  /** 미리보기 모드일 경우 true로 전달 (슬라이더 오른쪽 미리보기) */
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
        <strong>포트폴리오 미리보기:</strong>
        {portfolio.endsWith(".pdf") ? (
          <PdfViewer pdfUrl={portfolio} />
        ) : (
          <p>포트폴리오 파일이 PDF 형식이 아닙니다.</p>
        )}
      </PortfolioWrapper>
    </ResumeCard>
  );
};

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

// --------------------
// 2. PDF 미리보기 컴포넌트 (react-pdf 사용)
// --------------------
interface PdfViewerProps {
  pdfUrl: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [pdfData, setPdfData] = useState<string | null>(null);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch PDF");
        }
        const blob = await response.blob();
        // Blob으로부터 Object URL 생성 (자동 다운로드 방지)
        const objectUrl = URL.createObjectURL(blob);
        setPdfData(objectUrl);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchPDF();
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    console.log("PDF 로드 성공. 페이지 수:", numPages);
  };

  return (
    <PdfContainer>
      {pdfData ? (
        <Document
          file={pdfData}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="PDF를 불러오는 중입니다..."
        >
          <Page pageNumber={1} width={600} />
        </Document>
      ) : (
        <p>PDF를 불러오는 중입니다...</p>
      )}
    </PdfContainer>
  );
};

const PdfContainer = styled.div`
  width: 100%;
  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;

// --------------------
// 3. 지원서 슬라이더 컴포넌트 (한 번에 한 지원서만 보이도록)
// --------------------
interface ResumeCarouselProps {
  resumes: ResumeProps[];
}

export const ResumeCarousel: React.FC<ResumeCarouselProps> = ({ resumes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resumes.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + resumes.length) % resumes.length
    );
  };

  const currentResume = resumes[currentIndex];
  const nextResume = resumes[(currentIndex + 1) % resumes.length];

  return (
    <CarouselContainer>
      <Arrow onClick={handlePrev}>‹</Arrow>
      <Slides>
        <CurrentSlide>
          <ResumeComponent {...currentResume} />
        </CurrentSlide>
        {/* 오른쪽 그림자 효과 영역 클릭 시 다음 지원서로 전환 */}
        <ShadowSlide onClick={handleNext}>
          <ResumeComponent {...nextResume} isPreview />
        </ShadowSlide>
      </Slides>
      <Arrow onClick={handleNext}>›</Arrow>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px 0;
`;

const Slides = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 80%;
`;

const CurrentSlide = styled.div`
  flex: 0 0 100%;
`;

const ShadowSlide = styled.div`
  flex: 0 0 30%;
  margin-left: -50px;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const Arrow = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
`;
