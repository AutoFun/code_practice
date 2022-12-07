const express = require('express');
const mongodb = require('mongodb');
const app = express();

// Connect to the MongoDB server
mongodb.connect('mongodb://localhost:27017/mydb', (err, client) => {
  if (err) {
    // Handle the error
    console.log('An error occurred while connecting to MongoDB:', err);
  } else {
    // Create a reference to the database
    const db = client.db('mydb');

    // Set up the routes
    app.use('/users', require('./routes/users')(db));

    // Start the server
    app.listen(3000);
  }
});