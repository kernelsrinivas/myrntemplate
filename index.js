import { AppRegistry } from 'react-native';
import App from './App';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;
AppRegistry.registerComponent('MyRNTemplate', () => App);
