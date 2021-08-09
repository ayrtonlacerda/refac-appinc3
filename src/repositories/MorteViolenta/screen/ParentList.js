import React, { useCallback, useEffect, useState } from 'react';
import useFetch from 'use-http';
import { useCommons } from '../../../hooks';
import { useForm, useExpertiseStore } from '../../../global';
// ui
import * as Atoms from '../../../components/Atom';
import * as Molecules from '../../../components/Molecules';
import DB from '../../../database';


const ParentList = () => {
  console.log('render Parent List')
  const { navigation } = useCommons();
  const {
    mock,
  } = useForm();


  const handleBack = useCallback(() => {
    // handleReset();
    navigation.goBack();
  }, [navigation]);

  const handleSelectStep = async (steps) => {
    console.log({ steps })
    navigation.navigate('StepMv', {
      steps
    })
  };

  /*
    Desassociar creche do data trazendo da api
  */
  // TODO: fazer filtro offline de acordo com o tipo tb!
  return (
    <Atoms.Container>
      <Molecules.Header title={mock?.title} back handlePress={handleBack} />
      <Atoms.Container justifyContent="space-between" p={3}>
        <Atoms.Scroll noPaddingX>
          {mock.form.parent_steps.map(
            (parent) => (
              <Molecules.StepCard
                // percentage={() => handleProgressStepForm(mock.form.fields)}
                title={parent.title}
                description={parent.description}
                onClickCard={
                  () => handleSelectStep(parent.steps)
                }
              />
            ))}
        </Atoms.Scroll>

      </Atoms.Container>
    </Atoms.Container>
  );
};

export default ParentList;
