const express = require('express')
const register = require('../models/register')
const router = new express.Router()

router.put('/verified', async (req, res) => {
    // const reg = new register(req.body)
    const users = await register.findOne({email:req.body.email})
    if(!users){
        res.json({ 'status':0, 'message':"No such user exists"})
    }
    else{
        users.isVerified=1;
        try {
            await users.save()
            res.json({'status':1, 'message':'User is succesfully logged in'})
        } catch (e) {
            res.status(400).send(e)
        }
        
    
    }
})


module.exports = router