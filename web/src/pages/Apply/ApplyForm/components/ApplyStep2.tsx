// src/components/ApplyStep2.tsx
import React from "react";
import { StyledForm, FormField, Label, Input, SubmitButton } from "../styles";
import Form from "react-bootstrap/Form";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../../../../atoms/applyAtom";

interface Step2FormProps {
  register: UseFormRegister<FormData>;
  onSubmit: () => void;
}

const Step2Form: React.FC<Step2FormProps> = ({ register, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <FormField>
        <Label>이름</Label>
        <Input
          type="text"
          {...register("name")}
          placeholder="지원자의 성함을 입력해주세요"
        />
      </FormField>
      <FormField>
        <Label>학번</Label>
        <Input
          type="text"
          {...register("studentId")}
          placeholder="지원자의 학번을 입력해주세요 (9자리)"
        />
      </FormField>
      <FormField>
        <Label>연락처</Label>
        <Input
          type="text"
          {...register("phone")}
          placeholder="휴대폰 번호를 입력해주세요"
          defaultValue="010-"
        />
      </FormField>
      <FormField>
        <Label>학과</Label>
        <Input
          type="text"
          {...register("major")}
          placeholder="학과를 입력해주세요"
        />
      </FormField>
      <div style={{ display: "flex", gap: "10px" }}>
        <Form.Select {...register("grade")} aria-label="학년" defaultValue="">
          <option value="" disabled hidden>
            학년을 선택해주세요.
          </option>
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
          <option value="4">4학년</option>
        </Form.Select>
        <Form.Select
          {...register("status")}
          aria-label="학적 상태"
          defaultValue=""
        >
          <option value="" disabled hidden>
            학적 상태를 선택해주세요
          </option>
          <option value="1">재학생</option>
          <option value="2">휴학생</option>
          <option value="3">초과학생</option>
          <option value="4">졸업유예생</option>
        </Form.Select>
      </div>
      <SubmitButton type="submit">다음</SubmitButton>
    </StyledForm>
  );
};

export default Step2Form;
