import React from 'react';
import { Container, Ball, Label,  Line } from './styles';

const Progress = ({ steps, index }) => {
  return (
    <Container>
     
      {steps.map((item, i) =>
        <>
          <Ball select={i <= index}>
            <Label>{i + 1}</Label>
          </Ball>
          {i < steps.length - 1 && <Line select={i < index} />}
        </>
        
      )}
    </Container>
  );
}

export default Progress;