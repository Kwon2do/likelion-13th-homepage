import React from "react";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "../styles";

interface ToastMessageProps {
  show: boolean;
  setShow: (show: boolean) => void;
  message: string;
}

export const ToastMessage: React.FC<ToastMessageProps> = ({
  show,
  setShow,
  message,
}) => (
  <ToastContainer>
    <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
      <Toast.Header>
        <strong className="me-auto">알림</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  </ToastContainer>
);
