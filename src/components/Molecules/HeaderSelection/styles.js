import styled from 'styled-components';

export const Row = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 40px;
  margin-top: 20px;
`;

export const RightView = styled.View`
  border-bottom-width: ${(props) => (props.first ? '4px' : '0px')};
  border-bottom-color: #F9AA33;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LeftView = styled.View`
  border-bottom-width: ${(props) => (props.second ? '4px' : '0px')};
  border-bottom-color: #F9AA33;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
