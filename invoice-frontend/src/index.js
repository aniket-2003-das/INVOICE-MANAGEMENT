import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { InvoiceProvider } from './context/InvoiceContext';

ReactDOM.render(
  <React.StrictMode>
    <InvoiceProvider>
      <App />
    </InvoiceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);