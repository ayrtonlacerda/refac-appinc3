/* eslint-disable react-native/no-raw-text */
import React, { useCallback, useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import useFecth from 'use-http';
import { useCommons } from '../../../../hooks';
import { useForm, useExpertiseStore } from '../../../../global';
import { PickerSection } from './styles';
// ui
import * as Atoms from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';

const FinishExam = () => {
  const { navigation } = useCommons();
  const [showModalOk, setShowModalOk] = useState(false);
  const [showModalNew, setShowModalNew] = useState(false);

  const {
    post, response, loading, error,
  } = useFecth();

  // console.tron.log({ response, error });

  const { handleReset, currentExam, form } = useForm();

  const { currentExpertise } = useExpertiseStore();

  const handleYes = useCallback(() => {
    setShowModalOk(false);
    setShowModalNew(true);
  }, [navigation]);

  const handleNo = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleNewExam = () => {
    navigation.navigate('Steps');
  };

  const handleFinishExam = () => {
    // handleReset();
    navigation.navigate('Home');
  };

  /* const handleSendDataExam = async () => {
    await post(
      `/caso/${currentExpertise.codigoCaso}/vestigio/${currentExam}/procedimento`,
      { dadosTecnicos: form[currentExam] },
    );
    if (response.ok) setShowModalOk(true);
  }; */

  const handleSendDataExam = async () => {
    await post(
      `/caso/${currentExpertise.codigoCaso}/exame`,
      { dadosTecnicos: form[currentExam] },
    );
    if (response.ok) setShowModalOk(true); else setShowModalOk(true);
  };

  /* useEffect(() => {
    if (error) {
      console.log({ error });
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Ops, Algo deu errado',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 40,
      });
    }
  }, [error]); */

  return (
    <>
      <Molecules.Header title="Finalizar" back />
      <Atoms.Container alignItems="center" justifyContent="flex-start" p={4}>
        <Atoms.Container alignItems="center" mt={40}>
          <PickerSection>
            <Atoms.Text ml={11} fontWeight={4}>
              Deseja encerrar a amostragem?
            </Atoms.Text>
          </PickerSection>
        </Atoms.Container>
        <Atoms.Button
          textButton="SIM"
          type={3}
          onPress={handleSendDataExam}// setShowModalOk(true)}
        />
        <Atoms.Button textButton="NÃO" type={1} mt={2} onPress={handleNo} />
        <Molecules.BoxModal
          textInfo="Os arquivos gerados foram enviados para a sua pasta no SisCrim com sucesso!"
          textPrimaryButton="OK!"
          onClickPrimaryButton={handleYes}
          visible={showModalOk}
          onClose={() => setShowModalOk(false)}
        />
        <Molecules.BoxModal
          textInfo="Existe outro material desse caso a ser periciado?"
          textPrimaryButton="SIM"
          textSecondaryButton="NÃO"
          onClickPrimaryButton={handleNewExam}
          onClickSecondaryButton={handleFinishExam}
          visible={showModalNew}
        />
        <Molecules.BoxModal
          visible={loading}
          loading={loading}
        />
      </Atoms.Container>
    </>
  );
};

export default FinishExam;
