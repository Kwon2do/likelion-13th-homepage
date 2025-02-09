import { atom } from "recoil";

export interface FormData {
  name: string;
  studentId: string;
  phone: string;
  major: string;
  grade: string;
  status: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  portfolio: string | null;
}

export const formDataState = atom<FormData>({
  key: "formDataState",
  default: {
    name: "",
    studentId: "",
    phone: "",
    major: "",
    grade: "",
    status: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    portfolio: null,
  },
  dangerouslyAllowMutability: true,
});
