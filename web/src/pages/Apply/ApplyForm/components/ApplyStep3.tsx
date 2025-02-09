// src/components/ApplyStep3.tsx
import React, { useRef } from "react";
import { FormField, Label, SubmitButton, CharacterCount } from "../styles";
import Form from "react-bootstrap/Form";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../../../../atoms/applyAtom";

interface Step3FormProps {
  register: UseFormRegister<FormData>;
  onSubmit: () => void;
}

const Step3Form: React.FC<Step3FormProps> = ({ register, onSubmit }) => {
  const charCountRef1 = useRef<HTMLSpanElement | null>(null);
  const charCountRef2 = useRef<HTMLSpanElement | null>(null);

  const handleInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    ref: HTMLSpanElement | null,
    maxLength: number
  ) => {
    const value = e.target.value;
    if (ref) {
      ref.textContent = `${value.length}/${maxLength}`;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <FormField>
        <Label>Q1. 멋쟁이사자처럼에 지원하신 동기가 무엇인가요?</Label>
        <Form.Control
          as="textarea"
          rows={5}
          maxLength={300}
          {...register("question1")}
          placeholder="답변을 입력해주세요."
          onChange={(e) =>
            handleInput(
              e as React.ChangeEvent<HTMLTextAreaElement>,
              charCountRef1.current,
              300
            )
          }
          style={{ resize: "none" }}
        />
        <CharacterCount ref={charCountRef1}>0/300</CharacterCount>
      </FormField>

      <FormField>
        <Label>
          Q2. 지원하신 파트 역량과 성장하기 위해 어떤 노력을 해오셨는지
          설명해주세요.
        </Label>
        <Form.Control
          as="textarea"
          rows={10}
          maxLength={700}
          {...register("question2")}
          placeholder="답변을 입력해주세요."
          onChange={(e) =>
            handleInput(
              e as React.ChangeEvent<HTMLTextAreaElement>,
              charCountRef2.current,
              700
            )
          }
          style={{ resize: "none" }}
        />
        <CharacterCount ref={charCountRef2}>0/700</CharacterCount>
      </FormField>

      <SubmitButton type="submit">다음</SubmitButton>
    </form>
  );
};

export default Step3Form;
