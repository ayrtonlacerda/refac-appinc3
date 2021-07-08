import React, { useCallback, useEffect } from 'react';
import useFetch from 'use-http';
import { useCommons } from '../../../../hooks';
import { useForm, useExpertiseStore } from '../../../../global';
// ui
import * as Atoms from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';

import { PickerSection } from '../NewExam/styles';

import creches from '../../mocks/creches.json';

/*
  tem que existir dois cenarios
  1. para o genetica
  2. para o molequa
*/

const Steps = () => {
  const { navigation } = useCommons();
  const { currentExpertise } = useExpertiseStore();
  const {
    mock,
    form,
    setCurrentExam,
    handleProgressStepForm,
    handleCreateArrayForm,
  } = useForm();

  const {
    response,
    error,
    loading,
  } = useFetch(
    `/caso/${currentExpertise.codigoCaso}/vestigio`,
    {},
    [currentExpertise.codigoCaso],
  );

  const handleBack = useCallback(() => {
    // handleReset();
    navigation.goBack();
  }, [navigation]);

  const handleSelectExam = async (exam) => {
    console.log({ exam });
    setCurrentExam(exam?.codigoVestigio);
    if (mock.area === 'pericia_molequa') {
      // tranferir pra outra pagina
      navigation.navigate('Molequa', {
        fields: mock.form.fields,
        title: `Cód. ${exam.codigoVestigio}`,
      });
    }
    if (mock.area === 'pericia_genetica') {
      navigation.navigate('Forms', {
        fields: mock.form.fields,
        title: `Cód. ${exam.codigoVestigio}`,
      });
    }
  };

  useEffect(() => {
    handleCreateArrayForm(creches);

    if (response.ok) {
      handleCreateArrayForm(creches);
    }
  }, [response, loading]);

  return (
    <Atoms.Container>
      <Molecules.Header title={mock?.name} back handlePress={handleBack} />
      <Atoms.Container justifyContent="space-between" p={3}>
        <Atoms.Scroll noPaddingX>
          <Atoms.Container
            variant="viewSelection"
            flexDirection="row"
            mb="5"
            pl="3"
          >
            <Atoms.Ball size="XXBIG" text={1} />
            <Atoms.Text ml={11} fontWeight={4} width="95%">
              Novas Solicitações de Exame:
            </Atoms.Text>
          </Atoms.Container>
          {!loading && (response.data?.length > 0 || creches) ? (
            creches.map(
              (exam) => (
                <Molecules.StepCard
                  percentage={() => handleProgressStepForm(mock.form.fields)}
                  title={`Vestígio: ${exam.codigoVestigio}`}
                  description={
                    form?.[exam.codigoVestigio]?.description
                    || exam?.description
                  }
                  onClickCard={
                    () => handleSelectExam(exam)
                  }
                />
              ),
            )

          ) : (
            <Atoms.Text>
              Não há nenhum objeto de exame para esse caso
            </Atoms.Text>
          )}
          <Atoms.Container
            variant="viewSelection"
            flexDirection="row"
            mt="5"
            mb="2"
            pl="3"
          >
            <Atoms.Ball size="XXBIG" text={2} />
            <Atoms.Text ml={11} fontWeight={4} width="95%">
              Exames em Andamento:
            </Atoms.Text>
          </Atoms.Container>
          {!loading && (response.data?.length > 0 || creches) ? (
            creches.map(
              (exam) => (
                <Molecules.StepCard
                  percentage={() => handleProgressStepForm(mock.form.fields)}
                  title={`Vestígio: ${exam.codigoVestigio}`}
                  description={
                    form?.[exam.codigoVestigio]?.description
                    || exam?.description
                  }
                  onClickCard={
                    () => handleSelectExam(exam)
                  }
                />
              ),
            )
          ) : (
            <Atoms.Text>
              Não há nenhum objeto de exame para esse caso
            </Atoms.Text>
          )}
        </Atoms.Scroll>
        <Atoms.Button
          mb={3}
          textButton="NOVA CONSULTA"
          onPress={handleBack}
        />

      </Atoms.Container>
    </Atoms.Container>
  );
};

export default Steps;
