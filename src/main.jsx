import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Task 6: Wrap App with Provider to give all components access to Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
