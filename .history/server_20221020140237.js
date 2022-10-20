const express = require('express');
const morgan = require('morgan');
const path=require('path')



const app=express()

app.use('/',(req,res,next)=>{
    res.send('')
})