import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Administration from './screen/Administration';
import StartLocal from './screen/StartLocal';

const Stack = createStackNavigator();

export default function Molequa(props) {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="StartLocal"
    >
      <Stack.Screen name="StartLocal" component={() => <StartLocal {...props} />} />
      <Stack.Screen name="Administration" component={Administration} />
    </Stack.Navigator>
  );
}
