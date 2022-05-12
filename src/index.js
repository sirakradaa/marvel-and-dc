import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createStore } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

// Create store to share with all of the app
// const store = createStore(allReducers);

// Wrap app in Browser Router to allow use of react-router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

