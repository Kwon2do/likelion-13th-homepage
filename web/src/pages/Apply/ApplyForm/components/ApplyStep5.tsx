import React, { useState } from "react";
import { FormField, Label, SubmitButton } from "../styles";
import Form from "react-bootstrap/Form";
import { UseFormRegister } from "react-hook-form";
import type { FormData } from "../../../../atoms/applyAtom";

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
        <Label>포트폴리오 PDF 제출 (선택 사항)</Label>
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
    </form>
  );
};

export default Step5Form;
