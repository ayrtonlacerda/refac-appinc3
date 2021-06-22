import React, { useCallback, useState } from 'react';
import * as Atom from '../../../../components/Atom';
import { useCommons } from '../../../../hooks';
import Progress from './Progress';

const steps = [
  {
    placeholder: 'Digite seu ID',
    description: 'Por favor digite seu ID',
    label: 'ID',
  },
  {
    placeholder: 'Digite seu PIN',
    description: 'Por favor digite o PIN recebido no e-mail',
    label: 'PIN',
  },
  {
    placeholder: 'Digite sua senha',
    description: 'Por favor escolha uma senha',
    label: 'SENHA',
  },
];

const SignUp = () => {
  const { navigation } = useCommons();
  const [index, setIndex] = useState(0);

  const handleContinue = useCallback(() => {
    if (index < 2) setIndex(index + 1);
    else navigation.navigate('SignIn');
  }, [index]);

  return (
    <Atom.Container
      bg="DARK"
      p={8}
      alignItems="center"
      justifyContent="center"
    >
      <Atom.Text fontSize={10} fontWeight={3} color="WHITE" mb={2}>
        {index + 1}
      </Atom.Text>
      <Atom.Text
        textAlign="center"
        fontSize={2}
        fontWeight={3}
        color="WHITE"
        mb={6}
      >
        {steps[index].description}
      </Atom.Text>
      <Atom.Input auth mb={2} placeholder={steps[index].placeholder} />
      <Atom.Button
        outline
        mb={8}
        textButton="CONTINUAR"
        onPress={handleContinue}
      />
      <Progress steps={steps} index={index} />
    </Atom.Container>
  );
};

export default SignUp;
