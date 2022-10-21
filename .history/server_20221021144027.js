const express = require('express');
const morgan = require('morgan');
const  = require('path')
const dotenv = require('dotenv')
const bodyParse = require('body-parser')
const ejs = require('ejs');
const { dirname,path } = require('path');
const app = express()



/**
    - quelques middlewares pour specification des dossiers 
    - specification du moteur de visualisation utilise
 */
app.set('view engine', 'ejs');
app.use('/css', express.static(path.resolve(__dirname, './assets/css')))
app.set('view')
app.use(morgan('tiny'))


// initialisation de toutes routes de l'application
app.use(require('./routes/router'))

// initialisation du server et du port qui va ecoute les requetes du client
app.listen(4000, () => {
    console.log("Serveur lancer deja au port 4000");
})


