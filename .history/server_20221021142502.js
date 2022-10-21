const express = require('express');
const morgan = require('morgan');
const path = require('path')
const dotenv = require('dotenv')
const bodyParse = require('body-parser')
const ejs = require('ejs');
const { dirname } = require('path');
const app = express()




app.set('view engine', 'ejs');
app.use('/css', express.static(path.resolve(__dirname, './assets/css')))
app.set('view')

app.use(morgan('tiny'))

l
app.use(require('./routes/router'))



app.listen(4000, () => {
    console.log("Serveur lancer deja au port 4000");
})


