import React from 'react';
import styled from '@emotion/styled';
import { motion, MotionProps } from 'framer-motion';
import { colors } from '../../../styles/theme';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, MotionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(motion.button)<{
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
  fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-family: 'Pretendard-bold';
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  
  /* Size Variants */
  ${({ size }) =>
    size === 'small' &&
    `
    padding: 8px 16px;
    font-size: 14px;
  `}
  
  ${({ size }) =>
    size === 'medium' &&
    `
    padding: 12px 24px;
    font-size: 16px;
  `}
  
  ${({ size }) =>
    size === 'large' &&
    `
    padding: 16px 32px;
    font-size: 18px;
  `}
  
  /* Color Variants */
  ${({ variant }) =>
    variant === 'primary' &&
    `
    background-color: ${colors.button.primary};
    color: white;
    border: none;
    
    &:hover {
      background-color: ${colors.button.hover};
    }
    
    &:active {
      background-color: ${colors.button.active};
    }
  `}
  
  ${({ variant }) =>
    variant === 'secondary' &&
    `
    background-color: transparent;
    color: ${colors.button.primary};
    border: none;
    
    &:hover {
      color: ${colors.button.hover};
    }
    
    &:active {
      color: ${colors.button.active};
    }
  `}
  
  ${({ variant }) =>
    variant === 'outline' &&
    `
    background-color: transparent;
    color: ${colors.button.primary};
    border: 2px solid ${colors.button.primary};
    
    &:hover {
      border-color: ${colors.button.hover};
      color: ${colors.button.hover};
    }
    
    &:active {
      border-color: ${colors.button.active};
      color: ${colors.button.active};
    }
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
