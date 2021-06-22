import React from 'react';
import styled from 'styled-components/native';
import {
  color, space, typography, border,
} from 'styled-system';
import * as Atom from '..';

const View = styled.View`
  ${color}
  ${space}
  ${border}
  ${typography}
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px 10px 0px;
`;

const CameraButtonsViewComponent = ({
  children,
}) => (
    <View>
      {children}
    </View>
  );

export default CameraButtonsViewComponent;
