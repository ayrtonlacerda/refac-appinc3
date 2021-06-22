/* eslint-disable react-native/no-raw-text */
import React, { useCallback, useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import useFetch from 'use-http';
import { useCommons } from '../../../../hooks';
import { useForm, useExpertiseStore } from '../../../../global';
import { PickerSection } from './styles';
// ui
import * as Atoms from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';

import { caso } from '../../../../db';

const ConsultExpertise = () => {
  const { navigation } = useCommons();
  const [numberOfCase, setNumberOfCase] = useState('');
  const { setCurrentExpertise } = useExpertiseStore();
  const { handleReset } = useForm();

  const {
    get, response, error, loading,
  } = useFetch();

  const handleContinue = useCallback(async () => {
    // const expertise = caso;
    await get(`/caso/${numberOfCase}`);//  adicionar db (caso)
    if (response.ok) {
      setCurrentExpertise(response.data);
      navigation.navigate('Steps');
    }
  }, [navigation, numberOfCase]);

  const handleContinueMock = useCallback(async () => {
    const expertise = caso;
    setCurrentExpertise(expertise);
    navigation.navigate('Steps');
  }, [navigation, numberOfCase]);

  const handleExit = useCallback(() => {
    handleReset();
    navigation.navigate('Home');
  }, [navigation]);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Não existe esse caso...',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 40,
      });
    }
  }, [error]);

  return (
    <>
      <Molecules.Header title="Consultar Caso" back handlePress={handleExit} />
      <Atoms.Container alignItems="center" justifyContent="flex-start" p={4}>
        <Atoms.Container alignItems="center" mt={40}>
          <PickerSection>
            <Atoms.Ball size="XXBIG" text={1} />
            <Atoms.Text ml={6} fontWeight={4}>
              Número do caso:
            </Atoms.Text>
          </PickerSection>
          <Atoms.Input
            mt={3}
            maxLength={6}
            keyboardType="numeric"
            bg="WHITE_ICE"
            width="100%"
            variant="line"
            placeholder="6 dígitos"
            onChangeText={(text) => setNumberOfCase(text)}
            value={numberOfCase}
            returnKeyType="done"
          />
        </Atoms.Container>
        {numberOfCase.length > 3 && (
          <Atoms.Button loading={loading} textButton="CONSULTAR" onPress={handleContinue} />
        )}
      </Atoms.Container>
    </>
  );
};

export default ConsultExpertise;
