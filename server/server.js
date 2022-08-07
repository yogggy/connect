require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const Database = process.env.MONGO_URI
mongoose.connect(Database)

.then(()=>{console.log('Connected to database !!')})
.catch((error)=>{console.log(error)});




app.listen(port,()=>{
    console.log("server is running on",port)
})

