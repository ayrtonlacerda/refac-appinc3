import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer as DrawerComponent } from '../../../components/Organisms';

import Home from '../screens/Home';
import MyExpertise from '../screens/MyExpertise';
import POPs from '../screens/POPs';

const Drawer = createDrawerNavigator();

export default function UserRoute() {
  return (
    <Drawer.Navigator
      headerMode="none"
      initialRouteName="Home"
      drawerStyle={{
        width: '70%',
        backgroundColor: '#344955',
      }}
      drawerContent={(props) => <DrawerComponent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="MyExpertise" component={MyExpertise} /> */}
      <Drawer.Screen name="POPs" component={POPs} />
    </Drawer.Navigator>
  );
}
