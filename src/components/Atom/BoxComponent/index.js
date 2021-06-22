import React from 'react';
import styled from 'styled-components';
import {
  color, space, flexbox, border,
} from 'styled-system';

const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
  ${border}
  width: 100%;
  display: flex;
  border-radius: ${({ theme }) => theme.metrics.RADIUS / 10};
`;

View.defaultProps = {
  bg: 'WHITE_ICE',
  p: 2,
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomWidth: 1,
  borderColor: 'GREY',
};

const BoxComponent = ({ children, ...props }) => <View {...props}>{children}</View>;

export default BoxComponent;
