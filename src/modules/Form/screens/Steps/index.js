import React, { useCallback, useEffect, useState } from 'react';
import useFetch from 'use-http';
import { useCommons } from '../../../../hooks';
import { useForm, useExpertiseStore } from '../../../../global';
// ui
import * as Atoms from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';
import DB from '../../../../database';

import { PickerSection } from '../NewExam/styles';

import creches from '../../mocks/creches.json';

/*
  tem que existir dois cenarios
  1. para o genetica
  2. para o molequa
*/

/*
  1. se tiver nos docs nao pode aparecer no a fazer ...
*/

const Steps = () => {
  const { navigation } = useCommons();
  const { currentExpertise } = useExpertiseStore();
  const [offlineExams, setOfflineExams] = useState(null);
  const {
    mock,
    form,
    retriveStore,
    setCurrentExam,
    //  handleSetExam,
    handleProgressStepForm,
    handleCreateArrayForm,
  } = useForm();

  const {
    response,
    error,
    loading,
  } = useFetch(
    `/caso/${currentExpertise.codigoCaso || currentExpertise}/vestigio`,
    {},
    [currentExpertise],
  );

  // console.log({ error, currentExpertise, creches });
  // console.log({ offlineExams })
  // console.log('Doc: ', offlineExams)

  const handleBack = useCallback(() => {
    // handleReset();
    navigation.goBack();
  }, [navigation]);

  const handleSelectExam = async (exam) => {
    /*
      salvar exam offline, - vestigio tem que construir um array
      salvar form offline,
      salvar o mock
    */try {
      const doc = await DB.create({
        exam,
        mock,
      }, exam?.codigoVestigio);
      console.log({ doc });
    } catch (err) {
      console.log({ err });
    }

    setCurrentExam(exam);

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

  const handleSelectOfflineExam = (examOffline) => {
    retriveStore(examOffline);
    setCurrentExam(examOffline.exam);
    if (mock.area === 'pericia_molequa') {
      // tranferir pra outra pagina
      navigation.navigate('Molequa', {
        fields: mock.form.fields,
        title: `Cód. ${examOffline.exam.codigoVestigio}`,
        offline: true,
      });
    }
    if (mock.area === 'pericia_genetica') {
      navigation.navigate('Forms', {
        fields: mock.form.fields,
        title: `Cód. ${examOffline.exam.codigoVestigio}`,
        offline: true,
      });
    }
    console.log({ examOffline });
  };

  const retriveExamOffline = useCallback(async () => {
    const exams = (await DB.all()).rows;
    // console.log('all exams offline -> ', exams);
    setOfflineExams(exams);
  }, []);

  useEffect(() => {
    retriveExamOffline();

    if (response.ok) {
      handleCreateArrayForm(response.data || creches);
    } else {
      handleCreateArrayForm(creches);
    }
  }, [response, loading]);

  /*
    Desassociar creche do data trazendo da api
  */
  // TODO: fazer filtro offline de acordo com o tipo tb!

  console.log(form);

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
            pt="5"
          >
            <Atoms.Ball size="XXBIG" text={1} />
            <Atoms.Text ml={11} fontWeight={4} width="95%">
              Novas Solicitações de Exame:
            </Atoms.Text>
          </Atoms.Container>
          {/*! loading && (response.data?.length > 0 || creches) ? */ creches ? (
            /* (response.data?.length > 0 ? response.data : creches) */creches.map(
            (exam) => !offlineExams?.find(
              ({ doc }) => doc.exam.codigoVestigio === exam.codigoVestigio,
            ) && (response.ok
              ? (
                <Molecules.StepCard
                  // percentage={() => handleProgressStepForm(mock.form.fields)}
                  title={`Vestígio: ${exam.codigoVestigio}`}
                  description={exam?.descricao || exam?.nome}
                  onClickCard={
                    () => handleSelectExam(exam)
                  }
                />
              )
              : (
                <Molecules.StepCard
                  // percentage={() => handleProgressStepForm(mock.form.fields)}
                  title={`Vestígio: ${exam.codigoVestigio}`}
                  description={
                    form?.[exam.codigoVestigio]?.description
                    || exam?.description
                  }
                  onClickCard={
                    () => handleSelectExam(exam)
                  }
                />
              )
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
          {offlineExams?.map(
            ({ doc }) => doc.mock.type === mock.type && (
              <Molecules.StepCard
                // percentage={() => handleProgressStepForm(mock.form.fields)}
                title={`Vestígio: ${doc.exam.codigoVestigio}`}
                description={
                  form?.[doc.exam.codigoVestigio]?.description
                  || doc.exam?.description
                }
                onClickCard={
                  () => handleSelectOfflineExam(doc)
                }
              />
            ),
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
