import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';

function App() {
  return (
    <Router>
      <div className="App" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
      }}>
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="/create" element={<InvoiceForm />} />
          <Route path="/edit/:id" element={<InvoiceForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

