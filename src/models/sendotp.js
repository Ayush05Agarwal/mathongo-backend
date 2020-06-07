const mongoose = require('mongoose')
const validator = require('validator')

const sendotp = mongoose.model('sendotp', {
 mobile:{
     type:String,
     required: true
 }
})

module.exports = sendotp