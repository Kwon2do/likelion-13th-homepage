import React, { useState, useEffect } from "react";
import {
  PageWrapper,
  FormWrapper,
  Header,
  BackButton,
  FormTitle,
} from "./styles";
import { IoArrowBackSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { applyDummy } from "../../../constants/agreement.dummy";
import { ToastMessage } from "./components/ToastMessage";
import Step1Agreement from "./components/ApplyStep1";
import Step2Form from "./components/ApplyStep2";
import Step3Form from "./components/ApplyStep3";
import Step4Form from "./components/ApplyStep4";
import Step5Form from "./components/ApplyStep5";
import { useRecoilState } from "recoil";
import { formDataState } from "../../../atoms/applyAtom";
import type { FormData } from "../../../atoms/applyAtom";

const ApplyForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [formData, setFormData] = useRecoilState<FormData>(formDataState);
  const methods = useForm<FormData>({
    defaultValues: formData,
  });
  const { register, handleSubmit, reset, getValues } = methods;
  const [showToast, setShowToast] = useState<boolean>(false);

  // 단계 변경 시 Recoil에 저장된 값으로 폼을 리셋합니다.
  useEffect(() => {
    reset(formData);
  }, [step, formData, reset]);

  const handleNextStep = (nextStep: number) => {
    const currentData = getValues();
    setFormData({ ...formData, ...currentData });
    setStep(nextStep);
  };

  // onSubmit에서 portfolioFile 사용하기
  const onSubmit = async (data: FormData) => {
    const updatedData = { ...formData, ...data, portfolio: portfolioFile };
    console.log("최종 제출 데이터:", updatedData);
    setFormData(updatedData);
    if (step < 5) {
      setStep(step + 1);
    } else if (step === 5) {
      try {
        const formDataToSend = new FormData();
        Object.entries(updatedData).forEach(([key, value]) => {
          if (value !== null && value !== undefined) {
            if (key === "portfolio" && value instanceof File) {
              formDataToSend.append(key, value);
            } else {
              formDataToSend.append(key, String(value));
            }
          }
        });

        const response = await fetch(
          "https://port-0-likelion-13th-homepage-m6xxoqjg3249c6c2.sel4.cloudtype.app/applications",
          {
            method: "POST",
            body: formDataToSend,
          }
        );
      } catch (error) {
        console.error("최종 제출 에러:", error);
      }
    }
  };
  return (
    <PageWrapper>
      <ToastMessage
        show={showToast}
        setShow={setShowToast}
        message="회비 및 교육비 안내에 동의하셔야 합니다."
      />
      {(() => {
        switch (step) {
          case 1:
            return (
              <Step1Agreement
                applyDummy={applyDummy}
                handleNextStep={handleNextStep}
                setShowToast={setShowToast}
              />
            );
          case 2:
            return (
              <FormWrapper>
                <Header>
                  <BackButton onClick={() => handleNextStep(step - 1)}>
                    <IoArrowBackSharp size={24} />
                  </BackButton>
                  <FormTitle>13기 아기사자 지원서 - Step 1/4</FormTitle>
                </Header>
                <Step2Form
                  register={register}
                  onSubmit={handleSubmit(onSubmit)}
                />
              </FormWrapper>
            );
          case 3:
            return (
              <FormWrapper>
                <Header>
                  <BackButton onClick={() => handleNextStep(step - 1)}>
                    <IoArrowBackSharp size={24} />
                  </BackButton>
                  <FormTitle>13기 아기사자 지원서 - Step 2/4</FormTitle>
                </Header>
                <Step3Form
                  register={register}
                  onSubmit={handleSubmit(onSubmit)}
                />
              </FormWrapper>
            );
          case 4:
            return (
              <FormWrapper>
                <Header>
                  <BackButton onClick={() => handleNextStep(step - 1)}>
                    <IoArrowBackSharp size={24} />
                  </BackButton>
                  <FormTitle>13기 아기사자 지원서 - Step 3/4</FormTitle>
                </Header>
                <Step4Form
                  register={register}
                  onSubmit={handleSubmit(onSubmit)}
                />
              </FormWrapper>
            );
          case 5:
            return (
              <FormWrapper>
                <Header>
                  <BackButton onClick={() => handleNextStep(step - 1)}>
                    <IoArrowBackSharp size={24} />
                  </BackButton>
                  <FormTitle>13기 아기사자 지원서 - Step 4/4</FormTitle>
                </Header>
                <Step5Form
                  register={register}
                  onSubmit={handleSubmit(onSubmit)}
                  setPortfolioFile={setPortfolioFile}
                />
              </FormWrapper>
            );
          default:
            return null;
        }
      })()}
    </PageWrapper>
  );
};

export default ApplyForm;
