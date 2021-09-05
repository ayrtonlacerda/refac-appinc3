/* eslint-disable no-unused-expressions */
import React, { useState, useMemo } from 'react';
import { each, isEmpty } from 'lodash';
import { useCommons } from '../../../../hooks';
import { useForm } from '../../../../global';
// ui
import * as Atom from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';
import Toast from 'react-native-toast-message';
import { FormBuilder } from '../../../../components/Templates';
import DB from '../../../../database';

import areaExterna from '../../../../repositories/Molequa/mocks/areaexterna.json';
import passarela from '../../../../repositories/Molequa/mocks/passarela.json';
import patioCoberto from '../../../../repositories/Molequa/mocks/patiocoberto.json';
import obs from '../../../../repositories/Molequa/mocks/observacoes.json';

const Form = () => {
  const { route, navigation } = useCommons();
  const {
    handleChangeValueForm, form, currentExam, handleChangeValueKeysOfForm, keysOfForm,
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState(false);

  const { title, fields } = route.params;
  // 1. amostra consumida totalmente
  // 2.
  const handleConsumedTotally = () => {
    if (form[currentExam]?.question === 0) {
      setShowModal(true);
    } else {
      navigation.navigate('FinishExam');
    }
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

  console.log('Title -> ', title);
  console.log('Fields -> ', fields);

  const handleFillDefaultValues = async () => {
    let saveFieldsValues = {};
    each(formFields, (field) => {
      // "Saliva de pirulito"

      if (!isEmpty(field?.input?.fields)) {
        let defaultValue = {};
        if (!isEmpty(field?.radio)) {
          defaultValue = { ...defaultValue, radio: field?.default_value };
        }
        each(field?.input?.fields, (item) => {
          defaultValue = {
            ...defaultValue,
            [item.key]: item?.default_value,
          };
        });
        saveFieldsValues = {
          ...saveFieldsValues,
          [field.key]: defaultValue,
        };

        handleChangeValueKeysOfForm(field.key, defaultValue, true);
        return;
      }
      saveFieldsValues = {
        ...saveFieldsValues,
        [field.key]: field.default_value,
      };

      handleChangeValueKeysOfForm(field.key, field.default_value, true);
    });
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Valores padrões preenchidos com successo',
      // text2: 'Exemplo de sucesso para quando o codigo do lacre for igual ao do siscrim',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 100,
      bottomOffset: 40,
    });
    await DB.insert(
      currentExam,
      { keysOfForm: { ...keysOfForm, ...saveFieldsValues } },
    );
  };

  return (
    <Atom.Container>
      <Molecules.Header title={title} back />
      <Atom.Scroll noPaddingX>
        <Atom.Container>
          <Atom.Button
            onPress={() => setDefaultValues(true)}
            width="90%"
            m={2}
            type={2}
            textButton="Preencher com valores padrão"
          />
        </Atom.Container>

        <FormBuilder
          fields={formFields}
          handleChangeValueForm={handleChangeValueKeysOfForm}
        />
        {(form[currentExam]?.question || form[currentExam]?.question === 0) && (
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
      <Molecules.BoxModal
        textInfo="Tem certeza que deseja preencher com valores padrões? Isso irá sobreescrever o que já foi preenchido manualmente."
        textPrimaryButton="SIM"
        textSecondaryButton="NÃO"
        onClickPrimaryButton={() => {
          setDefaultValues(false);
          handleFillDefaultValues()
        }}
        onClickSecondaryButton={
          () => {
            setDefaultValues(false);
          }
        }
        visible={defaultValues}
        onClose={() => setShowModal(false)}
      />
    </Atom.Container>
  );
};

export default Form;
