import React from 'react';
import logo from './logo.svg';
import './App.css';
import PwaInstallPopupIOS from 'react-pwa-install-ios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename='/my-pwa'>
      {<div className="App">
        <header className="App-header">
          <p>
            Prueba PWA React UPDATE
          </p>
        </header>
        <PwaInstallPopupIOS>
          <div
            delay={0}
            style={{
              padding: '15px 30px',
              backgroundColor: 'blue',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Hola. Instala por aca tu APP
          </div>
        </PwaInstallPopupIOS>
      </div>}
    </BrowserRouter>
  );
}

export default App;
