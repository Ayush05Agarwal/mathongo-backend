const express = require('express')
// const register = require('../models/sendotp')
const router = new express.Router()
const request = require('request')

const send_Otp = (data, callback) => {
    const url = "https://api.msg91.com/api/v5/otp/verify?authkey=249505ASv2BqIyabL5edc67a1P1&mobile="+data['mobile']+"&otp="+data['otp']

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body)
        }
    })
}

router.post('/sendotp', async (req, res) => {
    const sendotp = req.body
       send_Otp(sendotp, (error, request) => {
            if (error) {
                return console.log(error)
            }
    
            res.send(request)
        })
    }
      
);

module.exports = router