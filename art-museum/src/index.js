import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(   ///was this originally a separate function?
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);