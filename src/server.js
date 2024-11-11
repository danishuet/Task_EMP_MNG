const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/employeeResolver');
const authMiddleware = require('./middleware/authMiddleware');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Apollo Server Setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    authMiddleware(req);
    return { user: req.user };
  },
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Listen on port 5000
  app.listen({ port: 5000 }, () =>
    console.log('Server running at http://localhost:5000/graphql')
  );
}

startServer();
