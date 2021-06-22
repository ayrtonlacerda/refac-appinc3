import React from 'react';
import styled from 'styled-components/native';
import {
  color, space, typography, border, variant, flexbox,
} from 'styled-system';

const Input = styled.TextInput.attrs({
  placeholderTextColor: ({ auth }) => (auth ? '#555' : '#aaa'),
})`
  ${color}
  ${space}
  ${typography}
  ${border}
  ${variant({
  variants: {
    line: {
      borderBottomWidth: 1,
      borderColor: 'BLACK',
    },
  },
})}
  min-height: 50;
  max-height: 250;

  align-items: center;
  justify-content: center;
  ${flexbox}
`;

Input.defaultProps = {
  bg: 'WHITE',
  p: 3,
  fontSize: 2,
  borderRadius: 4,
};

const InputComponent = ({
  auth, keyField, onChange, noForm, ...props
}) => (auth ? (
  <Input bg="WHITE_TRANSPARENT" borderRadius={25} {...props} width="100%" />
) : (
  <Input {...props} />
));

export default InputComponent;
