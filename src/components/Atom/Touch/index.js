import React from 'react';
import styled from 'styled-components/native';
import {
  color, space, typography, border, variant, layout,
} from 'styled-system';

const Button = styled.TouchableOpacity`
  ${color}
  ${space}
  ${border}
  ${typography}
  ${layout}
  ${variant({
    variants: {
      menuSelected: {
        bg: 'SECONDARY',
        borderRadius: 20,
      },
      stepCard: {
        px: 0,
      },
      datepicker: {
        bg: 'WHITE',
        width: '100%',
        height: 45,
        borderRadius: 5,
      },
    },
  })}
  align-items: flex-start;
  justify-content: center;
`;

Button.defaultProps = {
  px: 4,
};

const Touch = ({ children, ...props }) => <Button {...props}>{children}</Button>;

export default Touch;
