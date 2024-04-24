const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
        });
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
};

module.exports = connectDB;
