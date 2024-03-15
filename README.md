# Node.js Backend Project

## Description

This project is a Node.js, Express, and TypeScript-based backend system. It allows users to register, authenticate, and create posts. MongoDB is used for data persistence, and Prisma serves as the ORM for database interaction. Docker is employed to containerize the application and database, ensuring consistent environments across development and production. Jest is used for unit testing to ensure code quality.

## Getting Started

### Prerequisites

- Node.js
- Docker and Docker Compose
- MongoDB
- A package manager like npm or yarn

### Installation

1. Clone the repository:

   git clone <repository-url>

2. Navigate to the project directory:

   `cd simonini-software-backend-test`

3. Install dependencies:

   `npm install`

4. Set up environment variables:

   Create a .env file in the root directory and set the necessary environment variables such as:

   - JWT_SECRET="secret"
   - DATABASE_URL="mongodb://root:prisma@localhost:27017/prisma-mongo?authSource=admin&retryWrites=true&w=majority"

5. Running the database:

   `docker-compose up -d --build`

6. And finelly, run the application:

   `npm start`

7. To test the application, you need to run:

   `npm test`

### Now you can test the endpoints!!

API Endpoints:

1.  User Registration:

- Endpoint: /users/register
- Method: POST
- Body:

{
"name": "teste",
"email": "teste.teste@example.com",
"password": "teste23"
}

2. User Login

- Endpoint: /users/login
- Method: POST
- Body:

{
"email": "teste.teste@example.com",
"password": "teste23"
}

3. Create Post

- Endpoint: /posts
- Method: POST
- Headers:
  - Content-Type: application/json
  - Authorization: Bearer <your-genereted-token>
- Body:

{
"title": "My First Post",
"content": "This is the content of my first post."
}

4. Get Posts

- Endpoint: /posts
- Method: GET
- Description: Retrieve all posts.

### Considerations

When developing this Node.js and Express API with TypeScript, I chose a modular architecture to streamline development and scalability. Leveraging Prisma with MongoDB for efficient ORM operations proved effective. Authentication was implemented using JWT for security. The use of Docker compose for environment setup and Jest for unit testing were part of the specified stack, aligning with the goal of creating a robust and maintainable application. These decisions were guided by best practices and project requirements, aiming to create a user-friendly platform for user registration and post creation. For this project, the choice to run only the MongoDB database in Docker, instead of the entire application, was driven by unforeseen issues with replica set initialization and networking complexities in Docker containers. This streamlined the development process, eliminating the need for extensive Docker configurations, and allowed me to focus on the application logic and functionality without the added overhead of Docker for the Node.js environment. This approach ensured that we could reliably utilize MongoDB's features while maintaining the simplicity and ease of debugging the application in a local development environment.
