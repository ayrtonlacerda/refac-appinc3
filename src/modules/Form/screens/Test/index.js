/* eslint-disable react-native/no-raw-text */
import React, { useCallback } from 'react';
import { useCommons } from '../../../../hooks';
import { useForm } from '../../../../global';
// ui
import * as Atoms from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';

const Test = () => {
  const { navigation } = useCommons();
  const { handleReset } = useForm();

  // const handleContinueMock = useCallback(async () => {
  //   const expertise = caso;
  //   setCurrentExpertise(expertise);
  //   navigation.navigate('ListExpertise');
  // }, [navigation, numberOfCase]);

  const handleBack = useCallback(() => {
    handleReset();
    navigation.navigate('ListExpertise');
  }, [navigation]);

  return (
    <Atoms.Container>
      <Molecules.Header title="Testes" back handlePress={handleBack} />
      <Atoms.Container justifyContent="space-between" p={3}>
        <Atoms.Scroll noPaddingX>
          <Molecules.Toggles />
          <Molecules.ImgPlusInput />
        </Atoms.Scroll>
      </Atoms.Container>
    </Atoms.Container>
  );
};

export default Test;
