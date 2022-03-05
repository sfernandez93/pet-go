import React from 'react';
import ReactDOM from 'react-dom';

import './firebase';
import './index.css';
import App from './App';
import TodoContextProvider from './context/TodoContext';

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);