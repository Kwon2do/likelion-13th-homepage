// src/components/ApplyStep2.tsx
import React from "react";
import { StyledForm, FormField, Label, Input, SubmitButton } from "../styles";
import Form from "react-bootstrap/Form";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../../../../atoms/applyAtom";

interface Step2FormProps {
  register: UseFormRegister<FormData>;
  onSubmit: () => void;
  errors: FieldErrors<FormData>; // 추가: 에러 객체
}

const Step2Form: React.FC<Step2FormProps> = ({
  register,
  onSubmit,
  errors,
}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <FormField>
        <Label>이름</Label>
        <Input
          type="text"
          {...register("name", { required: "이름은 필수 입력 사항입니다." })}
          placeholder="지원자의 성함을 입력해주세요"
        />
        {errors.name && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.name.message}
          </span>
        )}
      </FormField>
      <FormField>
        <Label>학번</Label>
        <Input
          type="text"
          {...register("studentId", {
            required: "학번은 필수 입력 사항입니다.",
          })}
          placeholder="지원자의 학번을 입력해주세요 (9자리)"
        />
        {errors.studentId && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.studentId.message}
          </span>
        )}
      </FormField>
      <FormField>
        <Label>연락처</Label>
        <Input
          type="text"
          {...register("phone", { required: "연락처는 필수 입력 사항입니다." })}
          placeholder="휴대폰 번호를 입력해주세요"
          defaultValue="010-"
        />
        {errors.phone && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.phone.message}
          </span>
        )}
      </FormField>
      <FormField>
        <Label>학과</Label>
        <Input
          type="text"
          {...register("major", { required: "학과는 필수 입력 사항입니다." })}
          placeholder="학과를 입력해주세요"
        />
        {errors.major && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.major.message}
          </span>
        )}
      </FormField>
      <div style={{ display: "flex", gap: "10px" }}>
        <Form.Select
          {...register("grade", { required: "학년을 선택해주세요." })}
          aria-label="학년"
          defaultValue=""
        >
          <option value="" disabled hidden>
            학년을 선택해주세요.
          </option>
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
          <option value="4">4학년</option>
        </Form.Select>
        {errors.grade && (
          <span style={{ color: "red", fontSize: "12px", alignSelf: "center" }}>
            {errors.grade.message}
          </span>
        )}
        <Form.Select
          {...register("status", { required: "학적 상태를 선택해주세요." })}
          aria-label="학적 상태"
          defaultValue=""
        >
          <option value="" disabled hidden>
            학적 상태를 선택해주세요.
          </option>
          <option value="1">재학생</option>
          <option value="2">휴학생</option>
          <option value="3">초과학생</option>
          <option value="4">졸업유예생</option>
        </Form.Select>
        {errors.status && (
          <span style={{ color: "red", fontSize: "12px", alignSelf: "center" }}>
            {errors.status.message}
          </span>
        )}
      </div>
      <SubmitButton type="submit">다음</SubmitButton>
    </StyledForm>
  );
};

export default Step2Form;
