import React, { useCallback, useState, useEffect } from 'react';
import { PickerSection } from './styles';
import { useCommons } from '../../../../hooks';
import {
  Container,
  Text,
  Input,
  Button,
  Ball,
  Box,
} from '../../../../components/Atom';
import db from '../../../../database';
import { Header } from '../../../../components/Molecules';
import { Picker } from '../../../../components/Organisms';
import { useForm, useExpertiseStore } from '../../../../global';

import veiculos from '../../mocks/veiculos.json';
import genetica from '../../mocks/genetica_v2.json';
import molequa from '../../mocks/molequa.json';
// import generic from '../../mocks/data';

// json base do formulario
import components from '../../mocks/components.json';

const NewExam = () => {
  const { navigation } = useCommons();
  const { handleCreateForm, setMock } = useForm();
  const [exam, setExam] = useState();
  const { setCurrentExpertise } = useExpertiseStore();
  const [nameForm, setNameForm] = useState('');

  const handleContinue = useCallback(() => {
    setCurrentExpertise('8789789');
    // FIXME: desassociar a construção do objeto aqui, para colocar no repositorio
    if (exam.name === 'Genética') {
      handleCreateForm(exam.form, nameForm || 'Perícia sem nome');
      navigation.navigate('ConsultExpertise');
    }
    if (exam.name === 'Engenharia civil – Molequa') {
      navigation.navigate('Steps');
      setMock(exam.form);
    }
  }, [navigation, exam, nameForm]);

  return (
    <>
      <Header title="Nova Perícia" back />
      <Container p={4} mt={8} alignItems="flex-start" fontWeight={1}>
        <PickerSection alignItems="center">
          <Ball size="XXBIG" text={1} />
          <Text ml={11} fontWeight={4} width="95%">
            Novo Exame:
          </Text>
        </PickerSection>

        <Picker
          value={exam}
          onChangeOption={setExam}
          options={[
            {
              form: genetica,
              name: 'Genética',
            },
            {
              form: molequa,
              name: 'Engenharia civil – Molequa',
            },
          ]}
        />
        {exam && (
          <Button
            mb={2}
            textButton="CONTINUAR"
            mt={40}
            onPress={handleContinue}
          />
        )}
      </Container>

    </>
  );
};

export default NewExam;
