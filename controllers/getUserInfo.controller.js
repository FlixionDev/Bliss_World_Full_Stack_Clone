const Users = require('../models/usersRegister.model');
const express = require('express');
const userRoute = express.Router();

userRoute.get('/:id',async(req,res)=>{
    try {
        const find = await Users.findById(req.params.id);
        return res.status(200).send({
            userData:find
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"server error"
        })
    }
})
module.exports = userRoute;