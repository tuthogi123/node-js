// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const dotenv = require("dotenv")
require('dotenv').config();

app.use(express.json());

app.use('/users', userRoutes);

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Atlas');
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        process.exit(1); // Exit the process if unable to connect to the database
    }
};

connectToMongoDB();


app.listen( () => {
    console.log(`Server is running on port`);
});