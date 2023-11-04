import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { RootStoreProvider } from './hooks';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <RootStoreProvider>
        <App />
      </RootStoreProvider>
    </Router>
  </React.StrictMode>,
);
