const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const colors = require('colors');
const app = express();
const connectDB = require('./config/db.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.listen(port, () => console.log('listening on port ' + port))

// if you 'use' the /api/example endpoint it will use the route files required
app.use('/api/example', require('./routes/exampleRoutes'))