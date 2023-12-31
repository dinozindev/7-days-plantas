import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './components/GlobalStyle';
import HomePage from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <HomePage />
  </React.StrictMode>
);

