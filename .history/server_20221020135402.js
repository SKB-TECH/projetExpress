const express = require('express');
const morgan = require('morgan');

const app=express()

app.use('/',(req,res,next)=>{
    res.send{}
})