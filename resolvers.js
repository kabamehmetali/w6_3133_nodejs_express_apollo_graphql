const movies = require('./data');

const resolvers = {
  Query: {
    // Return the entire movies array (fallback to an empty array if undefined)
    movies: () => {
      console.log('Movies data:', movies);
      return movies || [];
    },
    // Return a movie matching the provided id
    movie: (_, { id }) => {
      return movies.find(movie => movie.id === id) || null;
    }
  },
  Mutation: {
    // Create a new movie record and add it to the array
    addMovie: (_, { input }) => {
      const newMovie = {
        id: String(movies.length + 1), // Simple ID generation logic
        ...input
      };
      movies.push(newMovie);
      return newMovie;
    },
    // Update an existing movie by id with the provided input fields
    updateMovie: (_, { id, input }) => {
      const index = movies.findIndex(movie => movie.id === id);
      if (index === -1) return null; // Movie not found
      movies[index] = { ...movies[index], ...input };
      return movies[index];
    },
    // Delete a movie by id and return the deleted movie
    deleteMovie: (_, { id }) => {
      const index = movies.findIndex(movie => movie.id === id);
      if (index === -1) return null; // Movie not found
      const deletedMovie = movies[index];
      movies.splice(index, 1);
      return deletedMovie;
    }
  }
};

module.exports = resolvers;
