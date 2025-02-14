
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  const app = express();
  
  // Create Apollo Server instance
  const server = new ApolloServer({ typeDefs, resolvers });
  
  // Start the server before applying middleware
  await server.start();
  server.applyMiddleware({ app });
  
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
