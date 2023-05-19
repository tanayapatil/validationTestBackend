const express = require('express')
const env=require('dotenv').config();
const mongoose = require('mongoose');
const cors =require('cors')

const app = express();
app.use(express.json())
app.use(cors())

const userRoutes=require('./routes/user')



mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.p45xopi.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.error("Could not connect to MongoDB...", err));


app.use('/api',userRoutes)


















app.listen(2000, () => {
    console.log(`server is running on port 2000`)
}) 