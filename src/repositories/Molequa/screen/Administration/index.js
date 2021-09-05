/* eslint-disable react-native/no-raw-text */
import React, { useCallback } from 'react';
import Toast from 'react-native-toast-message';
import { useCommons } from '../../../../hooks';
import { useForm } from '../../../../global';
import { MolequaImgs } from '../../../../assets';
// ui
import * as Atoms from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';

import { subAreas as subAreasMocks } from '../../mocks';

const Administration = () => {
  const { navigation, route } = useCommons();

  const { subAreas, image } = route.params;

  const handleBack = useCallback(() => {
    // handleReset();
    navigation.navigate('Estatica1');
  }, []);
  return (
    <Atoms.Container>
      <Molecules.Header title={route.params.title || 'Novo Local'} back />
      <Atoms.Container justifyContent="space-between" p={3}>
        <Atoms.Scroll noPaddingX>
          <Atoms.Image src={MolequaImgs[image]} />
          {subAreas?.map((nameArea, index) => (
            <Molecules.StepCard
              title={`${index + 1} - ${nameArea}`}
              // percentage={30}
              onClickCard={() => (subAreasMocks[nameArea] ? navigation.navigate('Forms', {
                fields: subAreasMocks[nameArea],
                title: `${index + 1} - ${nameArea}`,
              }) : Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Sub-Area não cotemplada',
                //  text2: 'Exemplo de erro para quando o codigo do lacre for diferente do siscrim',
                visibilityTime: 4000,
                autoHide: true,
                topOffset: 100,
                bottomOffset: 40,
              }))}
            />
          ))}
          <Atoms.Button loading={false} textButton="FINALIZAR" onPress={() => { }} mt={5} />
        </Atoms.Scroll>
      </Atoms.Container>
    </Atoms.Container>
  );
};

export default Administration;
