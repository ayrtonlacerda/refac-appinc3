import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useUser } from '../global';

import { Dynamic, Defined } from '../modules/Form/screens/POCFormula';

import UnAuthRoutes from '../modules/Auth/router';
import UserRoutes from '../modules/User/routes';
import FormsRoutes from '../modules/Form/routes';
import OCR from '../components/Organisms/OCR';

const Stack = createStackNavigator();

export default function Routes() {
  const { user } = useUser();

  console.log({ user });
  return (
<NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Defined">
      <Stack.Screen name="Dynamic" component={Dynamic} />
      <Stack.Screen name="Defined" component={Defined} />
  </Stack.Navigator>
</NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator headerMode="none">
  //       {// <Stack.Screen name="OCR" component={OCR} />
  //       }
  //       {!user ? (
  //         <Stack.Screen name="UnAuthRoutes" component={UnAuthRoutes} />
  //       ) : (
  //         <>
  //           <Stack.Screen name="UserRoutes" component={UserRoutes} />
  //           <Stack.Screen name="FormsRoutes" component={FormsRoutes} />
  //         </>
  //       )}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}
