# QuestSearch - Full Stack Application

QuestSearch is a full-stack search application where users can search for questions and retrieve relevant results. It features a **React** frontend, a **Node.js** backend with a gRPC service for querying data, and support for **CORS** and **pagination**.

## Features
- **Search Functionality**: Search for questions from a large dataset.
- **Pagination**: Results are displayed in pages for better usability.
- **Responsive Design**: The application is fully responsive, making it mobile-friendly.
- **Debounced Search**: Reduce unnecessary calls to the server as the user types.
- **Solution Toggle**: View or hide the solutions of questions.
- **CORS Support**: Cross-Origin Resource Sharing (CORS) is enabled for local development and production environments.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Backend Architecture](#backend-architecture)
- [Deployment](#deployment)

---

## Tech Stack

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express, gRPC
- **Database**: MongoDB (for storing data)
- **Deployment**: Vercel (for frontend), AWS (for backend)
- **CORS Middleware**: Express CORS for handling cross-origin requests

---

## Installation

### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/questsearch.git
   cd questsearch/backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:
   ```bash
   cp .env.example .env
   ```

4. Configure the `.env` file with your environment-specific settings.

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd questsearch/frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Configure the `.env` file with your backend API URL:
   ```env
   REACT_APP_API_URI=http://localhost:5000  # For local development
   ```

---

## Running Locally

1. **Start the backend**:
   - In the backend directory, run the following command to start the server:
     ```bash
     npm start
     ```

2. **Start the frontend**:
   - In the frontend directory, run the following command to start the React app:
     ```bash
     npm start
     ```

   - The frontend should now be accessible at [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env` file in both the backend and frontend directories with the following variables:

### Backend (`.env`)

```env
PORT=5000
GRPC_PORT=50051
GRPC_HOST=localhost:50051
MONGO_URI=mongodb://localhost:27017/questsearch
JWT_SECRET=your_jwt_secret_key
```

### Frontend (`.env`)

```env
REACT_APP_API_URI=http://localhost:5000 #local
REACT_APP_API_URI=https://quest-search-speak-x-backend.vercel.app #deployed
```

---

## Usage

### Searching Questions
- Type your query in the search box, and the app will automatically send a request to the backend API.
- The results will be displayed, and you can navigate through paginated results.
- You can toggle the solution visibility for each question.

### Clearing Search
- Click the "Clear" button to reset the search and clear the results.

---

## Backend Architecture

The backend is built with **Node.js** and **Express**. The core functionality includes:

- **gRPC Service**: The backend uses gRPC for efficient querying of question data. The questions are stored in MongoDB.
- **Express Proxy**: The Express server handles CORS, HTTP requests, and routes them to the gRPC service.
- **CORS Middleware**: Configured to allow requests from specific origins, ensuring compatibility with both development and production environments.

### API Endpoints
- **POST /api/search**: Accepts a query, type, page, and limit for fetching search results from the database via gRPC.

---