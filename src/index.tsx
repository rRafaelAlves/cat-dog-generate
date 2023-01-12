import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalSyles } from './Global.styles';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalSyles />
    <App />
  </React.StrictMode>
);


