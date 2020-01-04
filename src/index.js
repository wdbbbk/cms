import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router/router';
import * as serviceWorker from './serviceWorker';
import axios from './utils/axios'
React.Component.prototype.$axios = axios   // 把axios挂载到React.Component.prototype
ReactDOM.render(
  <App/>
, document.getElementById('root'));
serviceWorker.unregister();
