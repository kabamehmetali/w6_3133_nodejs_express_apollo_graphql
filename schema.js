const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Movie type definition
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }
  
  # Query definitions for reading movies
  type Query {
    # Get a list of all movies
    movies: [Movie!]!
    # Get a single movie by its ID
    movie(id: ID!): Movie
  }
  
  # Input type for creating a new movie
  input MovieInput {
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }
  
  # Input type for updating an existing movie
  input MovieUpdateInput {
    name: String
    director_name: String
    production_house: String
    release_date: String
    rating: Float
  }
  
  # Mutation definitions for creating, updating, and deleting movies
  type Mutation {
    # Create a new movie
    addMovie(input: MovieInput!): Movie!
    # Update an existing movie by ID
    updateMovie(id: ID!, input: MovieUpdateInput!): Movie
    # Delete a movie by ID and return the deleted movie
    deleteMovie(id: ID!): Movie
  }
`;

module.exports = typeDefs;
