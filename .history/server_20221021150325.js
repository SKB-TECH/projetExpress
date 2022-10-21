const app = require('express')();
const morgan = require('morgan');
const path = require('path')
const router = require('./routes/router')
const ejs = require('ejs');
const { dirname } = require('path');




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


