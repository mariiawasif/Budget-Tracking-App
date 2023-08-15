const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const app= express();
const userRoutes= require('./Routes/userRoutes')

app.use(express.json());
app.use(cors());
const port= 3000;
require("dotenv").config();
mongoose.connect(process.env.MONDO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("Connected to DB"))
.catch(()=> console.log(err));

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});