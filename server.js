//required packages
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//set a port
const PORT = process.env.PORT || 8080;

//creating an express app and configure
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//setting up database URL
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workout';

