const mongoose = require('mongoose');
const budgetSchema=  new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    Date : {
        type: Date,
        required: true
    }
}    
)
const budgets= mongoose.model('budgets', budgetSchema);
module.exports= budgets;