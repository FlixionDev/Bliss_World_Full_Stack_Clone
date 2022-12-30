const express = require('express');
const loginRouter = express.Router();
const Users = require('../models/usersRegister.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

loginRouter.post('/',async(req,res)=>{
    const {email,password} = req.body;
    try {
        const userExist = await Users.findOne({email:email});
        
        if(!userExist){
            return res.status(400).send({
                message:"email is incorrect..."
            })
        }
        const verfiyPass = await bcrypt.compare(password,userExist.password);

        if(!verfiyPass){
            return res.status(400).send({
                message:"password is incorrect..."
            }) 
        }

        const token = jwt.sign({userId:userExist._id},process.env.JWT_PRIVATE_KEY);
        return res.status(200).send({
            message:"login successfully...",
            token:token
        })
    } catch (error) {
        res.status(500).send({
            message:"server error"
        })
    }
})

module.exports = loginRouter;