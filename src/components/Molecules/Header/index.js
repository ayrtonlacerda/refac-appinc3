import React, { useCallback } from 'react';
import { Platform, StatusBar } from 'react-native';

import { useCommons } from '../../../hooks';
import { Box, Text, Icon } from '../../Atom';

const Header = ({
  back, trash, info, title, handlePress,
}) => {
  const { navigation } = useCommons();

  const handleMenu = useCallback(() => navigation.toggleDrawer(), [navigation]);

  const handleBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <Box
      bg="PRIMARY"
      flexDirection="row"
      justifyContent="space-between"
      p={3}
      noBorder
      header
      pt={Platform.OS === 'ios' && 40}
    >
      <StatusBar backgroundColor="#344955" barStyle="light-content" />
      {back
        ? <Icon type="back" onClickIcon={handlePress || handleBack} />
        : <Icon type="blackhole" />}
      <Text color="WHITE">{title}</Text>
      {info && <Icon type="information" onClickIcon={handlePress} />}
      {trash && <Icon type="trash" onClickIcon={handlePress} />}
      {!(info || trash) && <Icon type="blackhole" onClickIcon={handlePress} />}
    </Box>
  );
};

export default Header;
