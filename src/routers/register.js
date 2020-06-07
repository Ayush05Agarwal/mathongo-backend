const express = require('express')
const register = require('../models/register')
const router = new express.Router()

router.post('/register', async (req, res) => {
    const reg = new register(req.body)
    const users = await register.findOne({email:req.body.email})
    if(!users){
        try {
            await reg.save()
            res.status(201).res.json({'status':0, 'message':'User is not verified'})
        } catch (e) {
            res.status(400).send(e)
        }
    }
    else{
    // res.send(users)
    // res.send(users)
    if(!users.isVerified){
        res.json({'status':0, 'message':'User is not verified'})
    }
    else{
        res.json({'status':1, 'message':'User is succesfully logged in'})
    }
    }
})


module.exports = router