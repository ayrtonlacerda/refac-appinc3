import React from 'react';
import styled from 'styled-components';
import {
  flexbox, space, color, layout,
} from 'styled-system';
import styles from '../../../styles/index';

const Ball = styled.View`
  ${layout};
  ${flexbox};
  ${space};
  ${color};
  justify-content: center;
  align-items: center;
  height: ${({ size }) => (size ? styles.metrics[size] : styles.metrics.XXBIG)}px;
  width: ${({ size }) => (size ? styles.metrics[size] : styles.metrics.XXBIG)}px;
  border-radius: ${({ size }) => (size ? styles.metrics[size] / 2 : styles.metrics.XXBIG / 2)}px;
`;

const Children = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? styles.fontSizes[fontSize] : 14)}px;
  font-weight: bold;
`;

Ball.defaultProps = {
  bg: 'SECONDARY',
};

const BallForm = ({
  children, text, size, fontSize, ...props
}) => (
  <Ball size={size} {...props}>
    {text
      ? <Children fontSize={fontSize}>{text}</Children>
      : children}

  </Ball>
);

export default BallForm;
