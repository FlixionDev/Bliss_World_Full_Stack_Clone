const {validateEmail,validatePassword}  =  require('../validation/auth');
const Users = require('../models/usersRegister.model');
const express = require('express');
const userRoute = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

userRoute.post('/',async(req,res)=>{
    const {name,password,email} = req.body;
    const salt= await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);
    
    const isExits = await Users.findOne({email:email});
    if(isExits){
        return res.status(422).send({
            message:"user already exists"
        })
    }
    try {
        const userCreate = await Users.create({
            name:name,
            email:email,
            password:hashPassword
        });
        const token = jwt.sign({userId: userCreate._id }, process.env.JWT_PRIVATE_KEY);
        res.status(200).send({
            message:"Registration successfull...",
            token:token
        })
    } catch (error) {
        console.log(error);
    }
})
module.exports = userRoute;