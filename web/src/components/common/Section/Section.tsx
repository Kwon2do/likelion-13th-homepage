import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  backgroundColor?: string;
  fullHeight?: boolean;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, backgroundColor, fullHeight = false, children, ...props }, ref) => {
    return (
      <SectionContainer
        id={id}
        ref={ref}
        $backgroundColor={backgroundColor}
        $fullHeight={fullHeight}
        {...props}
      >
        {children}
      </SectionContainer>
    );
  }
);

Section.displayName = 'Section';

const SectionContainer = styled.section<{
  $backgroundColor?: string;
  $fullHeight?: boolean;
}>`
  width: 100%;
  min-height: ${({ $fullHeight }) => ($fullHeight ? '100vh' : 'auto')};
  padding: 60px 20px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default Section;
