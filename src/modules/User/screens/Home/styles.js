import styled from 'styled-components';

export const ViewToken = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 50;
  width: 100%;
  margin-top: 30;
  background-color: ${({ theme }) => theme.colors.BLACK_TRANSPARENT};
  border-radius: 25;
`;
