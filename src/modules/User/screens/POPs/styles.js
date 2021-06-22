import styled from 'styled-components';

export const TitleView = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 5px;
`;

export const Line = styled.View`
  width: 100%;
  background: #DDDDDE;
  height: 3px;
  margin-bottom: 20px;
`;

export const ModalContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background: rgba(255,255,255,1);
  border-radius: 50px;
`;

export const ModalView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  background: rgba(0,0,0,0.3);
`;

export const ModalContainerOptions = styled.View`
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  background: rgba(255,255,255,1);
  border-radius: 40px;
`;
