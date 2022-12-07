const express = require('express');
const mongodb = require('mongodb');

module.exports = function (db) {
  const router = express.Router();

  router.get('/', (req, res) => {
    // Read all the users from the database
    db.collection('users')
      .find()
      .toArray((err, users) => {
        if (err) {
          // Handle the error
          res.status(500).send('Error reading users from database');
        } else {
          // Send the list of users as a response
          res.send(users);
        }
      });
  });

  router.get('/:id', (req, res) => {
    // Read the user with the specified ID from the database
    const id = new mongodb.ObjectID(req.params.id);
    db.collection('users')
      .findOne({ _id: id }, (err, user) => {
        if (err) {
          // Handle the error
          res.status(500).send('Error reading user from database');
        } else {
          // Send the user as a response
          res.send(user);
        }
      });
  });

  router.post('/', (req, res) => {
    // Create a new user in the database
    const user = req.body;
    db.collection('users')
      .insertOne(user, (err) => {
        if (err) {
          // Handle the error
          res.status(500).send('Error creating user in database');
        } else {
          // Send a success response
          res.send('User created successfully');
        }
      });
  });

  router.put('/:id', (req, res) => {
    // Update the user with the specified ID in the database
    const id = new mongodb.ObjectID(req.params.id);
    const user = req.body;
    db.collection('users')
      .updateOne({ _id: id }, user, (err) => {
        if (err) {
          // Handle the error
          res.status(500).send('Error updating user in database');
        } else {
          // Send a success response
          res.send('User updated successfully');
        }
      });
  });

  router.delete('/:id', (req, res) => {
    // Delete the user with the specified ID from the database
    const id = new mongodb.ObjectID(req.params.id);
    db.collection('users')
      .deleteOne({ _id: id }, (err) => {
        if (err) {
          // Handle the error
          res.status(500).send('Error deleting user from database');
        } else {
          // Send a success response
          res.send('User deleted successfully');
        }
      });
  });

  return router;
};
