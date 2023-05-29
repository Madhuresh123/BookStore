const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://madhuresh91394:vSZLl0S5yL4hMOET@madhureshapi.vibkmok.mongodb.net/madhureshAPI?retryWrites=true&w=majority'

const connectDB = () => {
    console.log('Hi i m connected to mongodb');
    return mongoose.connect(mongoURL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    });
};  

module.exports = connectDB;
