import React, { useCallback } from 'react';
import { useCommons } from '../../../../hooks';
import { useForm, useUser } from '../../../../global';
import { removeLocalStorage } from '../../../../service/storage';
import { ViewToken } from './styles';
import {
  Container, Text, Button, Avatar,
} from '../../../../components/Atom';
import { Header } from '../../../../components/Molecules';

const Home = () => {
  const { navigation } = useCommons();
  const { setUser, user } = useUser();
  const {
    handleReset,
  } = useForm();

  const handleNew = useCallback(() => {
    handleReset();
    navigation.navigate('FormsRoutes');
  }, [navigation]);

  const handleExit = useCallback(() => {
    removeLocalStorage('@appinc_user');
    setUser(null);
  }, [navigation]);

  const handleMy = useCallback(() => navigation.navigate('MyExpertise'), [navigation]);

  return (
    <>
      <Header title="Inicial" />
      <Container background px={3} pb={3}>

        <ViewToken>
          <Text color="WHITE" fontSize={1} fontWeight={4}>
            Token válido por
          </Text>
          <Text> </Text>
          <Text color="GREEN_LIGHT" fontSize={1} fontWeight={4}>
            23
          </Text>
          <Text> </Text>
          <Text color="WHITE" fontSize={1}>
            dias
          </Text>
        </ViewToken>
        <Avatar mt={40} />
        <Text my={3} fontSize={5} fontWeight={4} color="WHITE">
          {user?.name}
        </Text>
        <Container background>
          <Button mb={2} textButton="Nova Pericia" mt={4} fontSize={2} onPress={handleNew} />
          <Button
            mb={20}
            type={4}
            textButton=" Renovar Token"
            onPress={() => {

            }}
          />
          <Text
            color="SECONDARY"
            onPress={handleExit}
            fontWeight={4}
            fontSize={3}
            mt={1}
          >
            Sair
          </Text>
        </Container>

      </Container>
    </>

  );
};

export default Home;
