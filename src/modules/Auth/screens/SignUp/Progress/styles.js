import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100;
  align-items: center;
  justify-content: space-between;
`;

export const Line = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  height: 3;
  background-color: ${({ theme, select }) => (select 
    ?  theme.colors.SECONDARY 
    : theme.colors.GREY_DARK)};;
`;

export const Ball = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45;
  width: 45;
  border-radius: 25;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-width: 3;
  border-color: ${({ theme, select }) => (select 
    ?  theme.colors.SECONDARY 
    : theme.colors.GREY_DARK)};
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme, select }) => (select 
    ?  theme.colors.SECONDARY 
    : theme.colors.GREY_DARK)};
`;