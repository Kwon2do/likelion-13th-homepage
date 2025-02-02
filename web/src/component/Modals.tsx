import { Modal, Button } from "react-bootstrap";
import styled from "@emotion/styled";

const LionImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const ModalContent = styled.div`
  text-align: center;
  color: #333;
`;

const CenteredModalHeader = styled(Modal.Header)`
  justify-content: center;
  position: relative;

  .modal-title {
    flex-grow: 1;
    text-align: center;
  }

  .close {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

const CenteredModalFooter = styled(Modal.Footer)`
  justify-content: center;
  .custom-button {
    :hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }
`;
interface ICustomModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  content: React.ReactNode;
  imageUrl?: string;
  primaryColor?: string;
}
export default function CustomModal({
  show,
  onHide,
  title,
  content,
  imageUrl,
  primaryColor = "#ff7710",
}: ICustomModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <CenteredModalHeader closeButton>
        <Modal.Title style={{ color: "black", fontFamily: "Pretendard-Bold" }}>
          {title}
        </Modal.Title>
      </CenteredModalHeader>
      <Modal.Body>
        <ModalContent>
          <LionImage src={imageUrl} alt="Modal Image" />
          {content}
        </ModalContent>
      </Modal.Body>
      <CenteredModalFooter>
        <Button
          variant="primary"
          className="custom-button"
          onClick={onHide}
          style={{
            backgroundColor: primaryColor,
            border: "none",
            width: "35%",
          }}
        >
          확인
        </Button>
      </CenteredModalFooter>
    </Modal>
  );
}
