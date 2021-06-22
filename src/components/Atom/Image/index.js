import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import {
  color, space, typography, border, layout, flexbox,
} from 'styled-system';
import Theme from '../../../styles';

const Imagem = styled(Image).attrs({
  resizeMode: 'contain',
})`
  ${color}
  ${space}
  ${border}
  ${typography}
  ${layout}
  ${flexbox};
  height: ${Theme.metrics.SCREEN_WIDTH * 0.5};
  width: ${Theme.metrics.SCREEN_WIDTH * 0.8};
  margin: 10px 0px;
`;

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageBoxComponent = ({
  src, ...props
}) => (
  <Container>
    <Imagem source={src} {...props} />
  </Container>
);

export default ImageBoxComponent;
