/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { startMirage } from './server';

console.log('haahha')
AppRegistry.registerComponent(appName, () => App);
