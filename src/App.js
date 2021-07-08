import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Toast from 'react-native-toast-message';
import Geolocation from '@react-native-community/geolocation';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'use-http';
import { BASE_URL, STATUS } from '@env';
import { startMirage } from '../server';
import theme from './styles';
import Routes from './routes';

if (STATUS === 'local') {
  startMirage();
}

console.disableYellowBox = true;

Entypo.loadFont();
Ionicons.loadFont();
FontAwesome.loadFont();
// FontAwesome5.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

const App = () => {
  useEffect(() => {
    Geolocation.setRNConfiguration({
      authorizationLevel: 'always',
    });
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Provider url={BASE_URL}>
        <StatusBar barStyle="dark-content" />
        <Routes />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
