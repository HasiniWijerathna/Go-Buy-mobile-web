
import App from './App';
import './stylesheets/index.css';

import { AppRegistry } from 'react-native';

// register the app
AppRegistry.registerComponent('App', () => App);

/**
 * https://github.com/necolas/react-native-web/blob/master/docs/guides/client-side-rendering.md
 * Client side  rendering app registary with react native
 */
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});

