const express = require('express');
const morgan = require('morgan');
const path=require('path')
const 
const bodyParse=require('body-parser')
const app=express()


app.use('/',(req,res,next)=>{
    res.send('')
})

