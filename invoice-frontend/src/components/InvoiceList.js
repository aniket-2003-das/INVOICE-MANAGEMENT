import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from '@mui/material';

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const fetchInvoices = useCallback(async () => {
    try {
      const response = await axios.get(`/api/invoices/?page=${page}&search=${search}`);
      setInvoices(response.data.results);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  }, [page, search]);

  useEffect(() => {
    fetchInvoices();
  }, [page, search, fetchInvoices]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/invoices/${id}/`);
      fetchInvoices();
    } catch (error) {
      console.error('Error deleting invoice:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Invoices</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <TextField 
          label="Search" 
          variant="outlined" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          style={{ width: '300px' }}
        />
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">Create New Invoice</Button>
        </Link>
      </div>
      <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>Invoice Number</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices?.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.invoice_number}</TableCell>
                <TableCell>{invoice.customer_name}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>
                  <Link to={`/edit/${invoice.id}`} style={{ textDecoration: 'none', marginRight: '10px' }}>
                    <Button variant="contained" color="primary">Edit</Button>
                  </Link>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(invoice.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1} style={{ marginRight: '10px' }}>Previous</Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
}

export default InvoiceList;

