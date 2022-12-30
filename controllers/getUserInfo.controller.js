const Users = require('../models/usersRegister.model');
const express = require('express');
const userRoute = express.Router();
const mongoose=require('mongoose')

userRoute.get('/:id',async(req,res)=>{
    let id=req.params.id
    try {
        const find = await Users.findById(id);
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