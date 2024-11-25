import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function InvoiceForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [invoice, setInvoice] = useState({
    invoice_number: '',
    customer_name: '',
    date: '',
    details: []
  });

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await axios.get(`/api/invoices/${id}/`);
        setInvoice(response.data);
      } catch (error) {
        console.error('Error fetching invoice:', error);
      }
    };

    if (id) {
      fetchInvoice();
    }
  }, [id]);

  const handleChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const handleDetailChange = (index, e) => {
    const updatedDetails = [...invoice.details];
    updatedDetails[index][e.target.name] = e.target.value;
    setInvoice({ ...invoice, details: updatedDetails });
  };

  const addDetail = () => {
    setInvoice({
      ...invoice,
      details: [...invoice.details, { description: '', quantity: 0, unit_price: 0 }]
    });
  };

  const removeDetail = (index) => {
    const updatedDetails = [...invoice.details];
    updatedDetails.splice(index, 1);
    setInvoice({ ...invoice, details: updatedDetails });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/api/invoices/${id}/`, invoice);
      } else {
        await axios.post('/api/invoices/', invoice);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving invoice:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>{id ? 'Edit Invoice' : 'Create Invoice'}</h1>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <TextField
          name="invoice_number"
          label="Invoice Number"
          value={invoice.invoice_number}
          onChange={handleChange}
          required
          style={{ flex: 1 }}
        />
        <TextField
          name="customer_name"
          label="Customer Name"
          value={invoice.customer_name}
          onChange={handleChange}
          required
          style={{ flex: 1 }}
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          value={invoice.date}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
          style={{ flex: 1 }}
        />
      </div>
      <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoice.details.map((detail, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    name="description"
                    value={detail.description}
                    onChange={(e) => handleDetailChange(index, e)}
                    required
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="quantity"
                    type="number"
                    value={detail.quantity}
                    onChange={(e) => handleDetailChange(index, e)}
                    required
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="unit_price"
                    type="number"
                    value={detail.unit_price}
                    onChange={(e) => handleDetailChange(index, e)}
                    required
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => removeDetail(index)} color="secondary">Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Button onClick={addDetail} variant="outlined">Add Detail</Button>
        <Button type="submit" variant="contained" color="primary">Save Invoice</Button>
      </div>
    </form>
  );
}

export default InvoiceForm;

