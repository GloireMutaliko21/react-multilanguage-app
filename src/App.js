import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useTranslation } from 'react-i18next'

function App() {

  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="App">

      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
        <button onClick={() => handleClick('en')}>
          English
        </button>
        <button onClick={() => handleClick('fr')}>
          French
        </button>
        <button onClick={() => handleClick('chi')}>
          Chinese
        </button>
      </nav>
      <header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {t('To get started, edit src/App.js and save to reload.')}
        </p>
      </header>
    </div>
  );
}

export default App;
