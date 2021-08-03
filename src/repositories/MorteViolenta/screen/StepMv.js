/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { useCommons } from '../../../hooks';
// ui
import * as Atoms from '../../../components/Atom';
import * as Molecules from '../../../components/Molecules';


const StepsMv = () => {
  const { navigation, route } = useCommons();
  console.log('Screen -> StepsMV');

  const { title, steps } = route.params;

  return (
    <Atoms.Container>
      <Molecules.Header title={title} back />
      <Atoms.Scroll noPaddingX>
        {steps?.map(({ title, description, fields }, index) => (
          <Molecules.StepCard
            title={`${index + 1} - ${title}`}
            description={description}
            onClickCard={() => navigation.navigate('Forms', {
              fields,
              title: `${index + 1} - ${title}`,
            })}
          />
        ))}
        <Atoms.Button loading={false} textButton="FINALIZAR" onPress={() => { }} mt={5} />
      </Atoms.Scroll>
    </Atoms.Container>
  );
};

export default StepsMv;
