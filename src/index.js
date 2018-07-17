// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root: any = document.getElementById('root');
if (Root !== null)
  ReactDOM.render(<App />, Root);
registerServiceWorker();
