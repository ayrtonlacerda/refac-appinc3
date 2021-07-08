/* eslint-disable react-native/no-raw-text */
import React, { useCallback, useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import useFetch from 'use-http';
import { setLocalStorage, getLocalStorage } from '../../../../service/storage';
import { useUser } from '../../../../global';
import * as Atom from '../../../../components/Atom';
import { Imgs } from '../../../../assets';
import { useCommons } from '../../../../hooks';
import * as db from '../../../../db';

const SignIn = () => {
  const { setUser } = useUser();
  const [auth, setAuth] = useState({
    user: null,
    password: null,
  });

  useEffect(() => {
    const retriveUser = async () => {
      try {
        const user = await getLocalStorage('@appinc_user');
        console.log({ user });
        setUser(user);
      } catch (err) {
        console.log({ err });
      }
    };

    retriveUser();
  }, []);

  const {
    post, response, loading, error,
  } = useFetch();

  const handleSignIn = useCallback(async () => {
    if (!auth.user || !auth.password) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Usuario e Senha são obrigatorios',
        //  text2: 'Exemplo de erro para quando o codigo do lacre for diferente do siscrim',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 40,
      });
      return;
    }

    // TODO -  salvar no local e login automatico
    const user = await post('/auth/login', auth);
    if (response.ok) {
      setLocalStorage('@appinc_user', user);
      setUser(user);
    }
  }, [auth]);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Ops, Algo deu errado',
        text2: 'Confira se usuario e senha estão corretos',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 40,
      });
    }
  }, [error]);

  return (
    <Atom.Container imgBackground={Imgs.PER_2}>
      <Atom.Container
        p={8}
        bg="DARK_STREGHT"
        alignItems="center"
        justifyContent="center"
      >
        <Atom.Text fontSize={8} fontWeight={4} color="WHITE" mb={1}>
          Bem-Vindo
        </Atom.Text>
        <Atom.Text fontSize={2} fontWeight={3} color="WHITE" mb={4}>
          Por favor digite suas credenciais
        </Atom.Text>
        <Atom.Input
          auth
          mb={2}
          placeholder="Matricula"
          onChangeText={(text) => setAuth({ ...auth, user: text })}
        />
        <Atom.Input
          auth
          secureTextEntry
          mb={4}
          placeholder="Senha"
          onChangeText={(text) => setAuth({ ...auth, password: text })}
        />
        <Atom.Button
          loading={loading}
          outline
          mb={8}
          textButton="ENTRAR"
          onPress={handleSignIn}
        />
      </Atom.Container>
    </Atom.Container>
  );
};

export default SignIn;
