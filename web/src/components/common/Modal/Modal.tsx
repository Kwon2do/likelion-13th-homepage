import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { zIndices } from '../../../styles/theme';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  width = '500px',
}) => {
  // ESC로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // 모달 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <ModalContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 500 }}
            width={width}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              {title && <ModalTitle>{title}</ModalTitle>}
              <CloseButton onClick={onClose}>×</CloseButton>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        </>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${zIndices.overlay};
`;

const ModalContainer = styled(motion.div)<{ width: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width};
  max-width: 90%;
  max-height: 90vh;
  background-color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: ${zIndices.modal};
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #333;
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: white;
  font-family: 'Pretendard-bold';
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #999;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const ModalContent = styled.div`
  padding: 24px;
  overflow-y: auto;
`;

export default Modal;
