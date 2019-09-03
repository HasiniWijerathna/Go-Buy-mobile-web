// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


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

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
