// IMPORT MODULES
import express from 'express'
const app = express()
import compression from 'compression'
import bodyParser from 'body-parser'
import MongoClient from'mongodb'
import MapboxClient from 'mapbox'

import * as dotenv from 'dotenv';
import 'dotenv/config.js';
import { router } from './router/router.js';


// SETTINGS GLOBAL VARIABLES
const port = process.env.PORT || 1234

const {
  MONGO_PASS,
  GEO_TOKEN
} = process.env
dotenv.config()

// Link the templating engine to the express app
app.set('view engine', 'ejs')

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views')

app.use(/.*-[0-9a-f]{10}\..*/, (req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=365000000, immutable')
  next()
})

// Tell express to use a 'static' folder
app.use(express.static('static'))
app.use(compression())
app.use(bodyParser())
app.use(router)

export let reservationsCollection

export let Reservation = {
  time: '',
  email: '',
  kenteken: ''
}

MongoClient
  // Maakt de connectie met de database
  .connect(`mongodb+srv://codingthecurbsminor2022:${MONGO_PASS}@codingthecurbs.ln7wtad.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(connection => {
    const db = connection.db('reservations')
    reservationsCollection = db.collection('dcderservations')
  })


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

// var MapboxClient = require('mapbox');

var client = new MapboxClient(`${GEO_TOKEN}`);

client.geocodeForward('Chester, NJ')
  .then(function(res) {
    // res is the http response, including: status, headers and entity properties
    var data = res.entity; // data is the geocoding result as parsed JSON
    console.log(data);
  })
  .catch(function(err) {
    // handle errors
  });