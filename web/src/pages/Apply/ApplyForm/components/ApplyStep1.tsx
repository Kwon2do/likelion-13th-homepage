// src/components/ApplyStep1.tsx
import React, { useState } from "react";
import {
  FormWrapper,
  AgreementWrapper,
  AgreementTitle,
  AgreementContent,
  NextButton,
} from "../styles";
import Form from "react-bootstrap/Form";

interface Step1AgreementProps {
  applyDummy: { title: string; content: string }[];
  handleNextStep: (nextStep: number) => void;
  setShowToast: (value: boolean) => void;
}

const Step1Agreement: React.FC<Step1AgreementProps> = ({
  applyDummy,
  handleNextStep,
  setShowToast,
}) => {
  const [agreementStep, setAgreementStep] = useState<number>(1);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleNextAgreementStep = () => {
    if (agreementStep < applyDummy.length) {
      setAgreementStep(agreementStep + 1);
    } else {
      if (!isChecked) {
        setShowToast(true);
      } else {
        handleNextStep(2);
      }
    }
  };

  return (
    <FormWrapper>
      {applyDummy.map(
        (item, index) =>
          agreementStep === index + 1 && (
            <AgreementWrapper key={index}>
              <AgreementTitle>{item.title}</AgreementTitle>
              <AgreementContent
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
              {index + 1 === applyDummy.length ? (
                <Form.Check type="checkbox" id="agree" className="mb-3">
                  <Form.Check.Input
                    type="checkbox"
                    value="agree"
                    name="feeAgreement"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <Form.Check.Label>
                    네, 본사 교육비(70,000원) 및 학교 회비(한 학기 20,000원)에
                    동의합니다.
                  </Form.Check.Label>
                </Form.Check>
              ) : null}
              <NextButton onClick={handleNextAgreementStep}>다음</NextButton>
            </AgreementWrapper>
          )
      )}
    </FormWrapper>
  );
};

export default Step1Agreement;
