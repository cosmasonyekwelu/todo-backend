# Todo Backend API

A simple Node.js + Express + MongoDB backend for managing todo tasks.

## Features

- Create tasks
- Get all tasks
- Edit tasks
- Delete tasks
- MongoDB persistence with Mongoose
- CORS enabled for frontend integration

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors

## Project Structure

```text
.
├── app.js
├── controller/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── taskRouter.js
└── package.json
```

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB connection string

## Setup

1. Clone the repository and enter the project directory.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
MONGO_URL=your_mongodb_connection_string
```

4. Start the development server:

```bash
npm run dev
```

Server runs on:

- `http://localhost:3000`

## API Base URL

- `/api/task`

## Endpoints

### 1) Get all tasks

- **Method:** `GET`
- **URL:** `/api/task/get`

**Response (200):**

```json
{
  "tasks": [
    {
      "_id": "...",
      "title": "Buy groceries",
      "description": "Milk, eggs, bread",
      "tags": "important"
    }
  ]
}
```

### 2) Create a task

- **Method:** `POST`
- **URL:** `/api/task/create`

**Request Body:**

```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "tags": "important"
}
```

**Response (201):**

```json
{
  "message": "Task created successfully",
  "task": {
    "_id": "...",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "tags": "important"
  }
}
```

### 3) Edit a task

- **Method:** `PATCH`
- **URL:** `/api/task/:id`

**Request Body (any updatable fields):**

```json
{
  "title": "Buy groceries and fruits"
}
```

**Response (201):**

```json
{
  "message": "Task Updated Successfully"
}
```

### 4) Delete a task

- **Method:** `DELETE`
- **URL:** `/api/task/:id`

**Response (204):**

```json
{
  "message": "Task successfully Deleted"
}
```

## Notes

- Ensure `MONGO_URL` is valid before starting the server.
- The app currently listens on a fixed port `3000`.
- Error handling can be further improved for production use.
