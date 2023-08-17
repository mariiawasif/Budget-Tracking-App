const cors= require('cors');
const express= require('express');
const router= express.Router();
const userController= require('../Controller/Signup');
const loginController = require('../Controller/Login');
const { authenticate } = require('../Middleware/Authentication');
const budgetController= require('../Controller/AddBudget')

router.post('/', userController.createUser);
router.post('/login', loginController.loginUser);
router.post('/addbudget', authenticate ,budgetController.createbudget);

module.exports= router;