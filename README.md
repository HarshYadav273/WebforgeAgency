# Webforge - Web Development Agency Website

A full-stack web development agency website built with React, Vite, Tailwind CSS, Express, and SQLite.

## Project Structure

```
webforge/
├── frontend/              # React + Vite frontend application
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx       # Main application component
│   │   ├── main.jsx      # Application entry point
│   │   └── index.css     # Tailwind CSS imports
│   ├── index.html
│   └── package.json
└── backend/              # Node.js + Express backend
    ├── routes/
    │   └── contact.js    # Contact form API routes
    ├── db/
    │   └── database.js   # SQLite database setup
    ├── server.js         # Express server
    └── package.json
```

## Features

### Frontend
- **Hero Section**: Eye-catching headline with 4 key statistics
- **Services**: 6 service cards showcasing expertise
- **Portfolio**: 4 featured projects with images
- **Pricing**: 3 pricing tiers (₹4,999 / ₹12,999 / ₹24,999)
- **Testimonials**: 3 client reviews
- **Contact Form**: Fully functional form connected to backend
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Hover effects and transitions

### Backend
- **Express API**: RESTful API for contact form
- **SQLite Database**: Stores contact form submissions
- **CORS Enabled**: Allows frontend to communicate with backend

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

### Backend
- Node.js
- Express
- better-sqlite3
- CORS

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the backend server:
```bash
npm start
```

The backend server will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### POST /api/contact
Submit a contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "service": "web-development",
  "budget": "professional",
  "message": "I need a website for my business"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "id": 1
}
```

### GET /api/contacts
Retrieve all contact form submissions (admin route)

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "service": "web-development",
    "budget": "professional",
    "message": "I need a website for my business",
    "created_at": "2024-03-25 10:30:00"
  }
]
```

## Design

- **Color Scheme**: Light cream/white background, black typography, orange accent (#ff6b35)
- **Typography**: Clean, editorial minimal design
- **Layout**: Fully responsive with smooth scroll animations
- **Aesthetic**: Professional, modern, and trustworthy

## Build for Production

### Frontend
```bash
cd frontend
npm run build
```

The production-ready files will be in `frontend/dist/`

### Backend
The backend is ready for production. You can use PM2 or similar process manager:
```bash
cd backend
npm start
```

## Database

The SQLite database (`contacts.db`) is automatically created in the `backend/db/` directory when the server starts. It contains a single `contacts` table with the following schema:

- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `name`: TEXT NOT NULL
- `email`: TEXT NOT NULL
- `service`: TEXT NOT NULL
- `budget`: TEXT NOT NULL
- `message`: TEXT NOT NULL
- `created_at`: DATETIME DEFAULT CURRENT_TIMESTAMP

## License

MIT
