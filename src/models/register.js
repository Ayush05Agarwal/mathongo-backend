const mongoose = require('mongoose')
const validator = require('validator')

const Register = mongoose.model('register', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    isVerified: {
        type: Number,
        default: 0
 
    }
})

module.exports = Register