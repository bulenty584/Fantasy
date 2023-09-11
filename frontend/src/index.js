import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TeamContextProvider} from './context/TeamContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TeamContextProvider>
    <App />
    </TeamContextProvider>
  </React.StrictMode>
);
