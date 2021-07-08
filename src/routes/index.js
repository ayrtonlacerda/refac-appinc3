import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useUser } from '../global';

import UnAuthRoutes from '../modules/Auth/router';
import UserRoutes from '../modules/User/routes';
import FormsRoutes from '../modules/Form/routes';
import OCR from '../components/Organisms/OCR';

const Stack = createStackNavigator();

export default function Routes() {
  const { user } = useUser();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {// <Stack.Screen name="OCR" component={OCR} />
        }
        {user ? (
          <Stack.Screen name="UnAuthRoutes" component={UnAuthRoutes} />
        ) : (
          <>
            <Stack.Screen name="UserRoutes" component={UserRoutes} />
            <Stack.Screen name="FormsRoutes" component={FormsRoutes} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
