// src/components/ApplyStep5.tsx
import React, { useState } from "react";
import { FormField, Label, SubmitButton } from "../styles";
import Form from "react-bootstrap/Form";
import { UseFormRegister } from "react-hook-form";
import type { FormData } from "../../../../atoms/applyAtom";
import { formDataState } from "../../../../atoms/applyAtom";
import CustomModal from "../../../../component/Modals";
import { useRecoilState } from "recoil";

interface Step5FormProps {
  register: UseFormRegister<FormData>;
  onSubmit: () => void;
}

const Step5Form: React.FC<Step5FormProps> = ({ register, onSubmit }) => {
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Recoil 상태 가져오기 (formDataState)
  const [formData, setFormData] = useRecoilState(formDataState);

  // react-hook-form의 register를 사용해 파일 input 등록 및 더미 파일 URL 생성
  const fileRegister = register("portfolio", {
    onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
      const uploadedFile = e.target.files?.[0];
      if (uploadedFile && uploadedFile.type === "application/pdf") {
        // 서버 배포 전이므로 실제 업로드 없이 더미 URL 생성
        const simulatedFileUrl = `https://dummy-link.com/uploads/${uploadedFile.name}`;
        setPdfBlobUrl(simulatedFileUrl);
        // Recoil의 formDataState 업데이트 (portfolio 필드에 더미 URL 저장)
        setFormData({ ...formData, portfolio: simulatedFileUrl });
        // 콘솔에 DB에 저장될 링크 출력
        console.log("DB에 저장될 링크:", simulatedFileUrl);
        alert("PDF 파일이 성공적으로 업로드되었습니다. (시뮬레이션)");
      } else {
        alert("PDF 파일만 업로드할 수 있습니다.");
      }
    },
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    onSubmit();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <FormField>
          <Label>포트폴리오 제출 (PDF 형식만 허용)</Label>
          <Form.Control
            type="file"
            accept=".pdf"
            {...fileRegister}
            className="upload-file"
          />
          {pdfBlobUrl && (
            <div style={{ marginTop: "20px" }}>
              <Label>포트폴리오 미리보기</Label>
              <iframe
                src={pdfBlobUrl}
                style={{
                  width: "100%",
                  height: "500px",
                  border: "2px solid #ff7710",
                  borderRadius: "10px",
                }}
                title="PDF 미리보기"
              ></iframe>
            </div>
          )}
        </FormField>
        <SubmitButton type="submit">제출하기</SubmitButton>
      </form>

      <CustomModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          window.location.href = "/";
        }}
        title="지원 완료"
        content={
          <p
            style={{
              fontSize: "14px",
              color: "gray",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            멋쟁이사자처럼 인천대학교 13기 아기사자 모집에 지원해주셔서
            감사합니다.
            <br />
            1차 서류 합격 발표는 지원자님께서 성의껏 작성해주신 지원서를 면밀히
            검토 후
            <br />
            <strong>2월 23일 (일) 저녁 중</strong>으로 기재하신 연락처로
            메시지를 발송할 예정입니다.
            <br />
            감사합니다.
          </p>
        }
        primaryColor="#ff7710"
      />
    </>
  );
};

export default Step5Form;
