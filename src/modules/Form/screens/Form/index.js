/* eslint-disable no-unused-expressions */
import React, { useState, useMemo } from 'react';
import { useCommons } from '../../../../hooks';
import { useForm } from '../../../../global';
// ui
import * as Atom from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';
import { FormBuilder } from '../../../../components/Templates';

import areaExterna from '../../../../repositories/Molequa/mocks/areaexterna.json';
import passarela from '../../../../repositories/Molequa/mocks/passarela.json';
import patioCoberto from '../../../../repositories/Molequa/mocks/patiocoberto.json';
import obs from '../../../../repositories/Molequa/mocks/observacoes.json';

const Form = () => {
  const { route, navigation } = useCommons();
  const { handleChangeValueForm, form, currentExam } = useForm();
  const [showModal, setShowModal] = useState(false);

  const { title, fields } = route.params;
  // 1. amostra consumida totalmente
  // 2.
  const handleConsumedTotally = () => {
    if (form[currentExam].question === 0) {
      setShowModal(true);
    } else {
      navigation.navigate('FinishExam');
    }

    // navegar pro fim da pericia
  };

  const formFields = useMemo(() => {
    switch (title) {
      case 'AREA EXTERNA':
        return areaExterna;
      case 'PASSARELA':
        return passarela;
      case 'PATIO COBERTO':
        return patioCoberto;
      case 'OBSERVAÇÃO':
        return obs;
      default:
        return fields;
    }
  }, []);

  return (
    <Atom.Container>
      <Molecules.Header title={title} back />
      <Atom.Scroll noPaddingX>
        <Molecules.Toggles />
        <FormBuilder
          fields={formFields}
          handleChangeValueForm={handleChangeValueForm}
        />
        {(form[currentExam].question || form[currentExam].question === 0) && (
          <Atom.Container p={3}>
            <Atom.Button type={3} textButton="Salvar" onPress={handleConsumedTotally} />
          </Atom.Container>
        )}
      </Atom.Scroll>
      <Molecules.BoxModal
        textInfo="A amostra foi consumida totalmente e não sobrou amostra suficiente para outro registro?"
        textPrimaryButton="SIM"
        textSecondaryButton="NÃO"
        onClickPrimaryButton={() => {
          setShowModal(false);
          navigation.navigate('FinishExam');
        }}
        onClickSecondaryButton={
          () => {
            setShowModal(false);
            navigation.navigate('FinishExam');
          }
        }
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </Atom.Container>
  );
};

export default Form;
