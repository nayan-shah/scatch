const express = require('express')
const router = express.Router();
const ownerModel = require('../models/owners-model')

router.get('/', function(req, res){
    res.send('hey');
})
if(process.env.NODE_ENV === 'development'){
    router.post('/create', async function(req, res){
        let owner = await ownerModel.find();
        if(owner.length > 0){
            return res.status(503).send('you dont have permission to create a new owner')
        }
        let {fullname, email, password} = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        })
        res.status(201).send(createdOwner)
    })
}

module.exports = router