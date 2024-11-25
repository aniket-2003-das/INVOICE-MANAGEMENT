from django.test import TestCase
from rest_framework.test import APIClient
from .models import Invoice, InvoiceDetail

class InvoiceAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.invoice_data = {
            "invoice_number": "INV001",
            "customer_name": "John Doe",
            "date": "2024-11-12",
            "details": [
                {
                    "description": "Product A",
                    "quantity": 2,
                    "unit_price": 50.00
                },
                {
                    "description": "Product B",
                    "quantity": 1,
                "unit_price": 75.00
                }
            ]
        }

    def test_create_invoice(self):
        response = self.client.post('/api/invoices/', self.invoice_data, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Invoice.objects.count(), 1)
        self.assertEqual(InvoiceDetail.objects.count(), 2)

    def test_get_invoice_list(self):
        self.client.post('/api/invoices/', self.invoice_data, format='json')
        response = self.client.get('/api/invoices/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 1)

    def test_update_invoice(self):
        response = self.client.post('/api/invoices/', self.invoice_data, format='json')
        invoice_id = response.data['id']
        updated_data = self.invoice_data.copy()
        updated_data['customer_name'] = 'Jane Doe'
        response = self.client.put(f'/api/invoices/{invoice_id}/', updated_data, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['customer_name'], 'Jane Doe')

    def test_delete_invoice(self):
        response = self.client.post('/api/invoices/', self.invoice_data, format='json')
        invoice_id = response.data['id']
        response = self.client.delete(f'/api/invoices/{invoice_id}/')
        self.assertEqual(response.status_code, 204)
        self.assertEqual(Invoice.objects.count(), 0)

        