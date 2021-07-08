import React from 'react';
import styled from 'styled-components/native';
import {
  color, space, typography, layout,
} from 'styled-system';

const Text = styled.Text`
  ${color}
  ${space}
  ${layout}
  ${typography}
  letter-spacing: 0.9px;
  font-family: Roboto;
`;

Text.defaultProps = {
  fontSize: 3,
  fontWeight: 3,
};

const TextComponent = ({ text, children, ...props }) => (
  <Text {...props}>{text || children}</Text>
);

export default TextComponent;
