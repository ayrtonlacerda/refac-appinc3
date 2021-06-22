import React, { useCallback } from 'react';

import { useCommons } from '../../../hooks';
import {
  Touch, Text,
} from '../../Atom';

import { Row, RightView, LeftView } from './styles';

const HeaderSelection = ({
  first, second, firstSelection, secondSelection,
}) => {
  const { navigation } = useCommons();

  const handleMenu = useCallback(() => navigation.toggleDrawer(), [navigation]);

  const handleBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <Row>
      <RightView first={first}>
        <Touch onPress={firstSelection}>
          <Text color="GREY_DARK">Baixar POPs</Text>
        </Touch>
      </RightView>
      <LeftView second={second}>
        <Touch onPress={secondSelection}>
          <Text color="GREY_DARK">POPs baixados</Text>
        </Touch>
      </LeftView>
    </Row>
  );
};

export default HeaderSelection;
