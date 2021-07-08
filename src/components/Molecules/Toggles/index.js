import React, { useState } from 'react';
import { Switch } from 'react-native';
import * as Atoms from '../../Atom';

const Toggles = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Atoms.Container variant="justRow">
      <Switch
        trackColor={{ false: '#344955', true: '#F9AA33' }}
        thumbColor={toggle2 ? '#F9AA33' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setToggle(!toggle2)}
        value={toggle}
      />
      <Atoms.Text text="Preencher com valores padrao" />
    </Atoms.Container>
  );
};

export default Toggles;
