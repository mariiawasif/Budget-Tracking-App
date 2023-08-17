const budgetController= require('../Models/budgetModel')
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');
const asyncHandler= require('express-async-handler');

const createbudget = async (req, res) => {
    try{
        const budget= new budgetController(req.body);
        const budgets= await budget.save();
        res.status(201).json(budgets);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
};

module.exports={
    createbudget
};