import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import styles from '../../../styles/index';

const ProgressBar = styled.View`
  ${space};
  background-color: ${({ theme }) => theme.colors.GREY};
  height: ${styles.metrics.SMALL / 2};
  width: 100%;
  border-radius: ${styles.metrics.RADIUS}px;
`;

const VariableBar = styled.View`
  ${space};
  background-color: ${({ theme }) => theme.colors.GREEN_LIGHT};
  height: ${styles.metrics.SMALL / 2};
  width: ${({ fraction }) => (fraction || 0)}%;
  border-radius: ${styles.metrics.RADIUS}px;
`;

const Progress = ({ percentage, ...props }) => (
  <ProgressBar {...props}>
    <VariableBar fraction={percentage} />
  </ProgressBar>
);

export default Progress;
