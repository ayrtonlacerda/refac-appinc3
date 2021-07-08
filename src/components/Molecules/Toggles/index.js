import React, { useState } from 'react';
import { Switch } from 'react-native';
import * as Atoms from '../../Atom';

const Toggles = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <>
      <Atoms.Container variant="justRow" mt={3}>
        <Switch
          trackColor={{ false: '#344955', true: '#F9AA33' }}
          thumbColor={toggle1 ? '#F9AA33' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setToggle1(!toggle1)}
          value={toggle1}
        />
        <Atoms.Text text="Enviar formulário incompleto" />
      </Atoms.Container>
      <Atoms.Container variant="justRow">
        <Switch
          trackColor={{ false: '#344955', true: '#F9AA33' }}
          thumbColor={toggle2 ? '#F9AA33' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setToggle2(!toggle2)}
          value={toggle2}
        />
        <Atoms.Text text="Enviar questionário padrão" />
      </Atoms.Container>

    </>
  );
};

export default Toggles;
