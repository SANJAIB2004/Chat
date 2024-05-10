const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.MONGO_URL,()=>{
  if (err) throw err;
});
const jwtSecret = process.env.JWT_SECRET;


const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', async(req, res) => {
  const {username,password} = req.body;
  try{
    const createdUser = await User.create({username,password});
    jwt.sign({userId:createdUser._id},jwtSecret,{},(err,token) =>{
        if(err) throw err;
        res.cookie('token',token).status(201).json('ok');
    });
  }
  catch{
    if(err) throw err;
    res.status(500).json('error');
  }
 
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// aV4h2EaFAufJMMww 
// mongodb+srv://mern-chat:aV4h2EaFAufJMMww@cluster0.sfliala.mongodb.net/