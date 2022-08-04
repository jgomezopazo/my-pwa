import React from 'react';
import './App.css';
import PwaInstallPopupIOS from 'react-pwa-install-ios';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename='/my-pwa'>
      {<div className="App">

        <header className="App-header">
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
          <p>
            Prueba PWA React UPDATE 4
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
