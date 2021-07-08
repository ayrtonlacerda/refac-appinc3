import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useForm } from '../../../global';

import NewExam from '../screens/NewExam';
import Steps from '../screens/Steps';
import Forms from '../screens/Form';
import ConsultExpertise from '../screens/ConsultExpertise';
import FinishExam from '../screens/FinishExam';
import Test from '../screens/Test';

// flows de pericias
import Molequa from '../../../repositories/Molequa';

const Stack = createStackNavigator();

export default function FormRoute() {
  const { mock } = useForm();
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={mock ? 'Steps' : 'NewExam'}
    >
      <Stack.Screen name="NewExam" component={NewExam} />
      <Stack.Screen name="ConsultExpertise" component={ConsultExpertise} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Steps" component={Steps} />
      <Stack.Screen name="Forms" component={Forms} />
      <Stack.Screen name="FinishExam" component={FinishExam} />
      <Stack.Screen name="Molequa" component={(props) => <Molequa {...props} />} />
    </Stack.Navigator>
  );
}
