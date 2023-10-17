// const mongoose = require("mongoose");
// require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB