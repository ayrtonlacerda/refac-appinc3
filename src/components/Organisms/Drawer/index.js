/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react';
import { useUser } from '../../../global';
import * as Atoms from '../../Atom';

const Drawer = ({ navigation, state, ...props }) => {
  const { setUser } = useUser();

  const handleSigOut = useCallback(() => setUser(false), []);

  return (
    <Atoms.Container pt={8} bg="PRIMARY" mt={8}>
      <Atoms.Avatar width="100px" height="100px" />
      <Atoms.Container pt={8} alignItems="flex-start" px={3} bg="PRIMARY">
        <Atoms.Touch
          onPress={() => navigation.navigate('Home')}
          variant={state.index === 0 && 'menuSelected'}
          p={1}
          width="100%"
        >
          <Atoms.Text color={state.index === 0 ? 'PRIMARY' : 'WHITE'}>Home</Atoms.Text>
        </Atoms.Touch>
        {/*  <Atoms.Touch
          onPress={() => navigation.navigate('MyExpertise')}
          mt={4}
          p={1}
          width="100%"
          variant={state.index === 1 && 'menuSelected'}
        >
          <Atoms.Text color={state.index === 1 ? 'PRIMARY' : 'WHITE'}>Minhas Pericias</Atoms.Text>
        </Atoms.Touch> */}
        <Atoms.Touch
          onPress={() => navigation.navigate('POPs')}
          mt={4}
          p={1}
          width="100%"
          variant={state.index === 2 && 'menuSelected'}
        >
          <Atoms.Text color={state.index === 2 ? 'PRIMARY' : 'WHITE'}>Meus POPs</Atoms.Text>
        </Atoms.Touch>
        <Atoms.Touch onPress={handleSigOut} mt={4}>
          <Atoms.Text color="WHITE">Sair</Atoms.Text>
        </Atoms.Touch>
      </Atoms.Container>

    </Atoms.Container>
  );
};

export default Drawer;
