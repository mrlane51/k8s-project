const colors = require('colors');
const path = require('path');
// init env variables
const dotenv = require('dotenv').config();

// load express module
// node framework for handling HTTP requests
const express = require('express');

// load env port to desire port number
const port = process.env.PORT || 3000;
// initialize express
const app = express();

// creating a path to the database file for connection
const connectDB = require('./config/db.js');
// starts the function to connect to the database
connectDB();

// middelware for POST/PUT requests that send data to the database
app.use(express.json());
// middelware to read incoming request obj, IF string or array
app.use(express.urlencoded({ extended: false }));
// start port & listens for a conn, if a response is received then output string
app.listen(port, () => console.log('listening on port ' + port))

// if you 'use' the /api/example endpoint it will use the route files required
app.use('/api/example', require('./routes/exampleRoutes'))