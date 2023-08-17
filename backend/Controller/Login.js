const user = require('../Models/userModel');
const jwt= require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler= require('express-async-handler');

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    });
};

const loginUser = asyncHandler(async(req,res)=> {
    const {email, password} = req.body;
    const users= await user.findOne({email});
    
    if(email===users.email && password===users.password){
        const token= generateToken(users._id);
        res.status(200).json({
            _id: users._id,
            email: users.email,
            password: users.password,
            token: token,

        });}
        else{
            res.status(401).json({message: 'Invalid email or password'});
            throw new Error('Invalid email or password');
        }
    
})

module.exports={
    loginUser
};