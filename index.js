/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import "./mocks/server";
AppRegistry.registerComponent(appName, () => App);
