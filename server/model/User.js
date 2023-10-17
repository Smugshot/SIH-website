// require('dotenv').config()
const mongoose = require("mongoose")
// mongoose.connect(process.env.DATA_URL)
mongoose.connect("mongodb://127.0.0.1:27017/SIES")

const User = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    updateRoles: [{
        type: String,
        default: 'admin'
    }],
    active: {
        type: Boolean,
        default: true
    }
})

// roles:{
            
// }
module.exports = mongoose.model("Students", User )