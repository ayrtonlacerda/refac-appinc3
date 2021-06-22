import React from 'react';
import styled from 'styled-components/native';

const Box = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 5;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.BLACK};
  margin: 10px 10px 10px;
  
`;

const Selected = styled.View`
  width: 14px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.SECONDARY};
  border-radius: 4;
`;

const CheckBox = ({ selected, onClickSelect }) => (
  <Box onPress={onClickSelect}>

    {selected && <Selected />}
  </Box>
);

 

export default CheckBox;
