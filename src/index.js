import React from 'react';
import createRoot from 'react-dom'
import Routes from './routes';





createRoot.render(
  <React.StrictMode>
    <Routes />

  </React.StrictMode>,
  document.getElementById('root')
);

