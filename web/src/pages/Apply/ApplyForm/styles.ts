import styled from "@emotion/styled";
export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const FormWrapper = styled.div`
  width: 50%;
  max-width: 600px;
  height: 800px;
  padding: 40px;
  border: 2px solid #ff7710;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  overflow-y: scroll;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #fba518;
  cursor: pointer;
  padding: 0;
  &:hover {
    color: #ff7710;
  }
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  font-family: "Pretendard-Bold";
  color: #fba518;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  padding-bottom: 80px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-family: "Pretendard-bold";
  color: white;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 12px;
  border: none;
  border-bottom: 1px solid #ff7710;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-family: "Pretendard";
  outline: none;
  transition: border-color 0.2s ease;
  &::placeholder {
    color: #999;
  }
  &:focus {
    border-color: #fba518;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 300px;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #ff7710;
  color: white;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  cursor: pointer;
  position: absolute;
  bottom: 20px; /* 항상 폼 하단에 위치 */
  left: 50%;
  transform: translateX(-50%);
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #fba518;
  }
  &:active {
    background-color: #e06b00;
  }
`;

export const AgreementWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 20px;
  background-color: #252525;
  border-radius: 12px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const AgreementTitle = styled.h2`
  font-size: 20px;
  font-family: "Pretendard-Bold";
  color: #fba518;
  margin-bottom: 15px;
`;

export const AgreementContent = styled.p`
  font-size: 14px;
  font-family: "Pretendard";
  line-height: 1.5;
`;

export const NoticeText = styled.p`
  font-size: 14px;
  font-family: "Pretendard-Bold";
  color: #ff5555;
  margin-top: 20px;
`;

export const NextButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #ff7710;
  color: white;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 20px;
  &:hover {
    background-color: #fba518;
  }
  &:active {
    background-color: #e06b00;
  }
`;
export const ToastContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  width: 300px;
`;

export const CharacterCount = styled.span`
  font-size: 12px;
  color: gray;
  text-align: right;
  margin-top: 5px;
`;
