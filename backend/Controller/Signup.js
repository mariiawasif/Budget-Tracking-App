const userController= require('../Models/userModel');
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');
const asyncHandler= require('express-async-handler');

const createUser = async (req, res) => {
    try{
        const user= new userController(req.body);
        const users= await user.save();
        res.status(201).json(users);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
};

module.exports={
    createUser
};