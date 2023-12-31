const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    confirmPassword: {
        type: String,
        required: true,
        unique: true
    },
    budgetLimit: {
        type: Number,
        required: true
    }
})
const users= mongoose.model('users', userSchema);
module.exports= users;
