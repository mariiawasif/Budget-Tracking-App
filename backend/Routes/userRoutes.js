const cors= require('cors');
const express= require('express');
const router= express.Router();
const userController= require('../Controller/Signup');

router.post('/', userController.createUser);

module.exports= router;