// src/components/ApplyStep4.tsx
import React, { useRef } from "react";
import { FormField, Label, SubmitButton, CharacterCount } from "../styles";
import Form from "react-bootstrap/Form";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../../../../atoms/applyAtom";

interface Step4FormProps {
  register: UseFormRegister<FormData>;
  onSubmit: () => void;
}

const Step4Form: React.FC<Step4FormProps> = ({ register, onSubmit }) => {
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
        <Label>
          Q3. 멋쟁이사자처럼 활동을 통해 얻고자 하는 경험이나 목표를
          설명해주세요.
        </Label>
        <Form.Control
          as="textarea"
          rows={7}
          maxLength={400}
          {...register("question3")}
          placeholder="답변을 입력해주세요."
          onChange={(e) =>
            handleInput(
              e as React.ChangeEvent<HTMLTextAreaElement>,
              charCountRef1.current,
              400
            )
          }
          style={{ resize: "none" }}
        />
        <CharacterCount ref={charCountRef1}>0/400</CharacterCount>
      </FormField>

      <FormField>
        <Label>
          Q4. 현재 참여 중이거나 올해 계획된 대외활동, 아르바이트, 인턴 등이
          있다면 모두 작성해주세요. (없다면 '없음' 기재)
          <br />위 활동과 병행하면서도 ‘멋쟁이사자처럼’ 활동에 충분히 시간을
          투자할 수 있다고 생각하시나요? 가능하다면, 시간 관리를 어떻게 할
          계획인지 설명해주세요.
        </Label>
        <Form.Control
          as="textarea"
          rows={7}
          maxLength={300}
          {...register("question4")}
          placeholder="답변을 입력해주세요."
          onChange={(e) =>
            handleInput(
              e as React.ChangeEvent<HTMLTextAreaElement>,
              charCountRef2.current,
              300
            )
          }
          style={{ resize: "none" }}
        />
        <CharacterCount ref={charCountRef2}>0/300</CharacterCount>
      </FormField>

      <SubmitButton type="submit">다음</SubmitButton>
    </form>
  );
};

export default Step4Form;
