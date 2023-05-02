const path = require('path');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error" , console.error.bind(console, "connection problem")); 

db.on("open", function(){
    console.log("connection success MongoDb");
});

module.exports = db;