# Invoice Management System

## Overview

The Invoice Management System is a full-stack application designed to streamline the creation, management, and tracking of invoices. It features a robust backend developed using Django REST Framework and a dynamic frontend built with React. This system supports multiple line items per invoice and provides seamless API interaction for efficient invoice handling.

---

## Features

- **CRUD Functionality**: Create, read, update, and delete invoices.
- **Multi-Line Items**: Include multiple line items in a single invoice.
- **Automatic Calculations**: Automatically calculates invoice totals.
- **API Integration**: RESTful API for backend interaction.
- **Responsive Design**: Optimized for various screen sizes.
- **Search & Filter**: Easy navigation with search and filter options.
- **Pagination**: Handles large datasets efficiently.

---

## Tech Stack

- **Backend**: Django, Django REST Framework
- **Frontend**: React (Hooks & Functional Components)
- **Database**: SQLite (Development), PostgreSQL (Production)
- **State Management**: React Context API
- **Styling**: CSS Modules
- **Deployment**: Vercel, Docker

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone "https://github.com/YOUR_USERNAME/invoice-management.git"
cd invoice-management
```

### 2. Backend Setup

```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 3. Frontend Setup

```bash
cd invoice-frontend
npm install
npm start
```

---

## API Endpoints

```bash
- **List all invoices**: `GET /api/invoices/`
- **Create a new invoice**: `POST /api/invoices/`
- **Retrieve a specific invoice**: `GET /api/invoices/{id}/`
- **Update a specific invoice**: `PUT /api/invoices/{id}/`
- **Delete a specific invoice**: `DELETE /api/invoices/{id}/`
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
