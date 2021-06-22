import React from 'react';
import styled from 'styled-components/native';
import {
  color, space, typography, border, layout,
} from 'styled-system';
import { Imgs } from '../../../assets';

const Image = styled.Image`
  margin: 0px 0px 20px 0px;
  ${color}
  ${space}
  ${border}
  ${typography}
  ${layout}
  height: 290;
`;

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Legend = styled.Text``;

const ImageBoxComponent = ({
  src, legend, ...props
}) => (
  <Container>
    <Image {...props} />
    {legend && <Legend>{legend}</Legend>}
  </Container>
);

export default ImageBoxComponent;
