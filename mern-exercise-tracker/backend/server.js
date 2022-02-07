const express = require('express');
const cors = require('cors');

require('dotenv').config();

// Create an express server on port 5000
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully")
});

// Start the server on port 5000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});