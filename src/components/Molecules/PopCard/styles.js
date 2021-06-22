import styled from 'styled-components';

export const Column = styled.View``;

export const Row = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const IconView = styled.View`
  display: flex;
  align-items: flex-end;
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  opacity: ${(props) => (props.opacity ? 0.6 : 1)}
`;
