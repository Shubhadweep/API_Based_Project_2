require('dotenv').config();
const express = require('express');
const server = express();
const Path = require('path');
const Port = process.env.PORT || 5700;
const cors = require('cors');
const userRouter = require('./App/router/userRouter');
const productRouter = require('./App/router/productRouter');
const categoryRouter = require('./App/router/categoryRouter');
const database_Connection = require('./App/config/db');

//Connecting with the Database:
database_Connection();


server.use(express.urlencoded({extended:true}));
server.use(express.static(Path.join(__dirname,'uploads')));


server.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    res.setHeader('Cache-Control','no-store,no-cache,must-revalidate,proxy-revalidate');
    next();
});


server.use(cors());
server.use(userRouter);
server.use(productRouter);
server.use(categoryRouter);
server.use((req,res)=>{
    res.send(`<h1> Page not Found! Please check and try again </h1>`)
})
server.listen(Port,()=>{
    console.log(`The Server is Running at: http://localhost:${Port}`);
    
})