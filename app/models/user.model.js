const mongoose = require('mongoose')
// const validator = require('validator')

const userSchema = mongoose.Schema({
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

const User = mongoose.model('User', userSchema)
module.exports = User