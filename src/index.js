import React, { Supense, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import './i18next'

ReactDOM.render(
  <Suspense fallback={(<div>Loading ~~~</div>)}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
