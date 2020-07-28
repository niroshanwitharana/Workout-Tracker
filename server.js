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
//roots setup
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

//setting up database URL
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {useNewUrlParser: true, useUnifiedTopology: true});

//listening to the PORT
app.listen(PORT , ()=>{
    console.log(`app running on ${PORT}`);
});

