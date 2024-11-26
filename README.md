```markdown
# Invoice Management System

## Overview

This is a full-stack invoice management system built with Django REST Framework backend and React frontend. The system allows creating and managing invoices with multiple line items through a single API endpoint. It provides a responsive interface for invoice management, including features like pagination, search, and filter options.

## Live Demo

The application is deployed and can be accessed at: [https://invoice-management-sooty.vercel.app/](https://invoice-management-sooty.vercel.app/)

## Features

### Backend
- RESTful API for invoice management
- Models for Invoice and InvoiceDetail
- Create/Update invoice with details in a single request
- Proper validation for all fields
- Auto-compute line_total and total_amount
- Appropriate error messages
- Pagination for GET requests

### Frontend
- Responsive invoice management interface
- Invoice list view with pagination
- Create/Edit invoice form
- Delete invoice functionality
- Basic search and filter options

## Technical Stack

- Backend: Django, Django REST Framework
- Frontend: React (with hooks and functional components)
- Database: SQLite (development), PostgreSQL (production)
- State Management: Context API
- Styling: CSS Modules
- Deployment: Vercel

## Setup Instructions

### Backend

1. Clone the repository:
```

git clone `<repository-url>`
cd invoice-management

```plaintext

2. Create a virtual environment:
```

python -m venv venv

```plaintext

3. Activate the virtual environment:
- On Windows: 
```

venv\Scripts\activate

```plaintext
- On macOS and Linux: 
```

source venv/bin/activate

```plaintext

4. Install dependencies:
```

pip install -r requirements.txt

```plaintext

5. Run migrations:
```

python manage.py migrate

```plaintext

6. Start the server:
```

python manage.py runserver

```plaintext

### Frontend

1. Navigate to the frontend directory:
```

cd invoice-frontend

```plaintext

2. Install dependencies:
```

npm install

```plaintext

3. Start the development server:
```

npm start

```plaintext

## API Documentation

### Endpoints

- `GET /api/invoices/`: List all invoices
- `POST /api/invoices/`: Create a new invoice
- `GET /api/invoices/{id}/`: Retrieve a specific invoice
- `PUT /api/invoices/{id}/`: Update a specific invoice
- `DELETE /api/invoices/{id}/`: Delete a specific invoice

### Sample Request Payload

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

## Deployment

The application is deployed on Vercel. The deployment process involves:

1. Setting up a Vercel account
2. Connecting the GitHub repository to Vercel
3. Configuring build settings for both backend and frontend
4. Setting up environment variables for production


## Docker Configuration

A Docker configuration is provided for easy development and deployment. To run the application using Docker:

1. Ensure Docker and Docker Compose are installed on your system
2. Navigate to the project root directory
3. Run the following command:

```plaintext
docker-compose up --build
```


4. Access the application at `http://localhost:8000`


## Testing

Unit tests are implemented for both frontend and backend to ensure code quality and functionality. To run the tests:

### Backend Tests

```plaintext
python manage.py test
```

### Frontend Tests

```plaintext
cd invoice-frontend
npm test
```

## Evaluation Criteria

### Code Quality

- Clean, maintainable code
- Proper error handling
- Use of design patterns
- Code organization


### Functionality

- All required features working
- API performance
- Frontend usability


### Technical Choices

- Appropriate use of Django/React features
- Security considerations


## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
