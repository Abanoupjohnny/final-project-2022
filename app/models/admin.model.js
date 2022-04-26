const mongoose = require('mongoose')
// const validator = require('validator')

const adminSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone:{
        type: Number,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    }
})

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin