const express = require('express');
const morgan = require('morgan');
const path=require('path')
const dotenv=require('dotenv')
const bodyParse=require('body-parser')
const ejs=require('ejs')
const app=express()

app.set('views engine ')


app.use('/',(req,res,next)=>{
    res.send('')
})


app.listen()


