import React from 'react';
import styled from 'styled-components';
import {
  color, space, flexbox, layout, variant,
} from 'styled-system';
import theme from '../../../styles';

const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
  ${layout}
  ${variant({
    variants: {
      group: {
        width: theme.metrics.SCREEN_WIDTH - 40,
      },
    },
  })}
  display: flex;
  border-radius: ${({ theme, noBorder }) => (noBorder ? 0 : theme.metrics.RADIUS)};
`;

View.defaultProps = {
  width: '100%',
  bg: 'WHITE',
  p: 2,
  alignItems: 'center',
  justifyContent: 'center',
};

/**
 * @param {Boolean} noBorder - retira o border radius
 */

const Box = ({ children, ...props }) => <View {...props}>{children}</View>;

export default Box;
