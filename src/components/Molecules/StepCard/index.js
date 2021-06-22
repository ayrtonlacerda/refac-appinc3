import React from 'react';
import styled from 'styled-components';
import { flex, layout, typography } from 'styled-system';
import { Box, ProgressBar, Touch } from '../../Atom';

const Container = styled(Box)`
  ${flex};
  ${layout};
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.Text`
  ${typography};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights[4]};
`;

const Description = styled.Text`
  ${typography};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  margin-top: 10px;
`;

const StepCard = ({
  title, description, onClickCard, percentage,
}) => (
  <Touch variant="stepCard" onPress={onClickCard}>
    <Container py={4} width={1} mt={2}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {percentage && (
        <ProgressBar mt={24} percentage={percentage} />
      )}
    </Container>
  </Touch>

);

export default StepCard;
