import React, { useState } from "react";
import { FormField, Label, SubmitButton } from "../styles";
import Form from "react-bootstrap/Form";
import { UseFormRegister } from "react-hook-form";
import type { FormData } from "../../../../atoms/applyAtom";
import CustomModal from "../../../../component/Modals";

interface Step5FormProps {
  register: UseFormRegister<FormData>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  setPortfolioFile: (file: File) => void; // 추가된 prop
}

const Step5Form: React.FC<Step5FormProps> = ({
  register,
  onSubmit,
  setPortfolioFile,
}) => {
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("파일 선택됨:", e.target.files);
    if (file) {
      if (file.type === "application/pdf") {
        setPortfolioFile(file); // 부모로 파일 전달
        setPdfBlobUrl(URL.createObjectURL(file));
      } else {
        alert("PDF 파일만 업로드할 수 있습니다.");
      }
    }
  };

  const { onChange, ...inputProps } = register("portfolio");

  return (
    <form onSubmit={onSubmit}>
      <FormField>
        <Label>포트폴리오 제출 (PDF 형식만 허용)</Label>
        <Form.Control
          type="file"
          accept=".pdf"
          {...inputProps}
          onChange={(e) => {
            handleFileChange(e as React.ChangeEvent<HTMLInputElement>);
            // 이벤트 객체를 그대로 전달하여 react-hook-form에 파일 객체가 바로 반영되도록 함
            onChange(e);
          }}
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
      <SubmitButton type="submit" onClick={() => setShowModal(true)}>
        제출하기
      </SubmitButton>
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
    </form>
  );
};

export default Step5Form;
