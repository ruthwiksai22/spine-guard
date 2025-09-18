import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

// Render the root App into the div with id="root"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
