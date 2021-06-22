import React from 'react';
import { Modal } from 'react-native';
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
`;

const Contaienr = styled.View`
  ${color}
  ${space}
  ${layout}
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  flex: 1;
  background-color: rgba(0,0,0, 0.3);
`;
const ModalContainer = ({ children, ...props }) => (
  <Modal animationType="fade" transparent {...props}>
    <Contaienr>
      {children}
    </Contaienr>
  </Modal>
);

export default ModalContainer;
