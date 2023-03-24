const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// add controllers
const employers = require('./controllers/employers');

// create app
const app = express();
app.use(bodyParser.json());

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

// DB connection
mongoose.connect(process.env.CONNECTION_STRING, {
}).then((res) =>{
    console.log("Connected to Mongo DB");
}).catch((err) =>{
    console.log("Connection failed");
})

app.use('/api/employers', employers);

// start server
app.listen(3000);
module.exports = app;