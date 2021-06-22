import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #23f6;
`;
/*
export const Image = styled.Image`
  width: 200px;
  height: 200px;
`; */
export const Imagem = styled(Image).attrs({
  resizeMode: 'contain',
})`
height: 250px;
width: 250px;
margin: 10px 0px;
`;

export const Row = styled.View`
height: 55px;
  flex-direction: row;
background-color: #f234;
`;

export const Column = styled.View`
  width: 48%;
  flex-direction: column;

`;
