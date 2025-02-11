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
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import CustomModal from "../../../component/Modals";
const ApplyForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useRecoilState<FormData>(formDataState);
  const methods = useForm<FormData>({
    defaultValues: formData,
  });
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = methods;
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
        setIsLoading(true);
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
            credentials: "include",
          }
        );
        if (response.ok) {
          setIsLoading(false);
          setShowModal(true);
        }
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
      {/* 로딩 스피너를 요청 진행 중에 표시 */}
      {isLoading && (
        <Spinner
          animation="border"
          role="status"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            color: "rgb(255, 119, 16) !important",
            zIndex: 9999,
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
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
                  errors={errors}
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
      {showModal && (
        <CustomModal
          show={showModal}
          onHide={() => {
            setShowModal(false);
            navigate("/"); // 모달 닫힘 시 "/"로 이동
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
              1차 서류 합격 발표는 지원자님께서 성의껏 작성해주신 지원서를
              면밀히 검토 후
              <br />
              <strong>2월 23일 (일) 저녁 중</strong>으로 기재하신 연락처로
              메시지를 발송할 예정입니다.
              <br />
              감사합니다.
            </p>
          }
          primaryColor="#ff7710"
        />
      )}
    </PageWrapper>
  );
};

export default ApplyForm;
