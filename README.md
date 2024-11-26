# Invoice Management System

## Overview

This full-stack invoice management system, built with Django REST Framework (backend) and React (frontend), allows users to create, manage, and track invoices with multiple line items through a single API endpoint.

## Live Demo

Access the application at: [https://invoice-management-sooty.vercel.app/](https://invoice-management-sooty.vercel.app/)

## Features

- CRUD operations for invoices
- Multiple line items per invoice
- Automatic calculation of totals
- RESTful API
- Responsive web interface
- Search and filter functionality
- Pagination for efficient data handling

## Tech Stack

- Backend: Django, Django REST Framework
- Frontend: React (hooks and functional components)
- Database: SQLite (development), PostgreSQL (production)
- State Management: React Context API
- Styling: CSS Modules
- Deployment: Vercel

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/yourusername/invoice-management.git
cd invoice-management
```

### Backend Setup

```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup

```bash
cd invoice-frontend
npm install
npm start
```

## API Endpoints

```bash
**List all invoices**: GET /api/invoices
**Create a new invoice**: POST /api/invoices
**Retrieve a specific invoice**: GET /api/invoices/{id}
**Update a specific invoice**: PUT /api/invoices/{id}
**Delete a specific invoice**: DELETE /api/invoices/{id}
```

---

## Sample API Request

```json
{
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
```

## Deployment on Vercel

### Install Vercel globally

```bash
npm i -g vercel
```

### Login to Vercel

```bash
vercel login
```

### Deploy the application

```bash
vercel
```

---

## Testing Backend and Frontend Tests

```bash
python manage.py test
cd invoice-frontend
npm test
```

---

## Docker Setup

```bash
docker-compose up --build
```

---

## Access Dockerised App

```html
http://localhost:8000 # Backend
http://localhost:8000 # Frontend
```

---

## Future Improvements

### 1. Authentication: Add user authentication and authorization

### 2. Export Options: Enable PDF and CSV exports

### 3. Payment Integration: Integrate payment gateway functionality

### 4. Advanced Analytics: Provide detailed reporting and analytics

---

## Contributing

### We welcome contributions! Please fork the repository and submit a pull request with your proposed changes

---

## License

### This project is licensed under the MIT License
