import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ParentList from './screen/ParentList';
import StepMv from './screen/StepMv';

const Stack = createStackNavigator();

export default function MorteViolenta(props) {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="ParentList"
    >
      <Stack.Screen name="ParentList" component={() => <ParentList {...props} />} />
      <Stack.Screen name="StepMv" component={() => <StepMv {...props} />} />
    </Stack.Navigator>
  );
}
