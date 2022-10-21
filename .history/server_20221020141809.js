const express = require('express');
const morgan = require('morgan');
const path=require('path')
const bodyParse=require('body-parser')
const app=express()

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);


app.use('/',(req,res,next)=>{
    res.send('')
})