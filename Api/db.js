const mongoose = require('mongoose')
const mongoURL = "mongodb+srv://blogApi:Vdd1BjqyKGbTIx8m@cluster0.douzhsa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = () => {
    console.log('Hi i m connected to mongodb');
    return mongoose.connect(mongoURL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,

    });

};  

module.exports = connectDB;
