const express = require('express');
const morgan = require('morgan');
const path = require('path')
const dotenv = require('dotenv')
const bodyParse = require('body-parser')
const ejs = require('ejs');
const { dirname } = require('path');
const app = express()

app.set('views engine', 'ejs')


app.use('/', (req, res, next) => {
    res.render('main', )
})


app.listen(4000, () => {
    console.log("Serveur lancer deja au port 4000");
})


