# Node.js Backend Project

## Description

This project is a backend system based on Node.js, Express, and TypeScript, structured using Domain-Driven Design (DDD) principles. It supports user registration, authentication, and post creation. MongoDB is used for data persistence, managed through Prisma as the ORM. Docker Compose is utilized to containerize both the application and the database, ensuring consistent environments across development, testing, and production. Jest is employed for unit testing to maintain code quality.

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

3. Set up environment variables:

   Create a .env file in the root directory and set the necessary environment variables such as:

   - JWT_SECRET="secret"
   - DATABASE_URL="mongodb://root:prisma@mongodb_container:27017/prisma-mongo?authSource=admin&retryWrites=true&w=majority"
  
4. Running the application:

   `docker-compose up -d --build`

5. After starting the services with Docker Compose, you might need to manually initialize the MongoDB replica set. Follow these steps to interact with the MongoDB inside the Docker container:

5.1 Use the following command to enter the MongoDB shell inside the container:

  `docker exec -it simonini-software-backend-test-mongodb_container-1 mongo -u root -p prisma --authenticationDatabase admin`
  
5.2 Once inside the MongoDB shell, authenticate yourself as the admin user:

   `use admin`
   `db.auth("root", "prisma")`

5.3 Initiate the Replica Set:

`rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongodb_container:27017" }
  ]
})`

Now the application is perfectly running

===================================================
7. To test the application, you need to create the test database:

   `docker-compose -f docker-compose.test.yml up -d`

7.1. Install the dependencies:

   `npm install`
   `npx prisma generate`
   
7.2. And finely:

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
  - Authorization: Bearer `your-genereted-token`
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

Adopting DDD principles facilitated a modular and scalable architecture, simplifying complex domain logic handling. Integrating the entire application within Docker Compose streamlined deployment processes and ensured consistency across environments. Prisma's efficient ORM capabilities for MongoDB enhanced the development experience, while JWT provided secure authentication mechanisms. The comprehensive test setup with Jest, tailored to a Dockerized environment, supported rigorous validation of business logic and functionalities.
