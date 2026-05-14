import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

if(window.location.pathname === "/" || !window.location.pathname.includes("/martin-matarrese")) {
  window.history.replaceState(null, null, "/martin-matarrese")
};

createRoot (document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);