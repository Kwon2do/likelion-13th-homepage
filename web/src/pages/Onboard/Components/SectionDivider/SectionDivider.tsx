import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../../styles/theme';

const Divider = styled.div`
  width: 50px;
  height: 5px;
  background-color: ${colors.primary};
  margin: 20px auto 40px;
  border-radius: 2px;
`;

const SectionDivider: React.FC = () => {
  return <Divider />;
};

export default SectionDivider;
