const express = require('express')
// const fetch = require('node-fetch')
const app = express()
const compression = require('compression')
const bodyParser = require('body-parser')
app.use(bodyParser());
const port = process.env.PORT || 1234

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

require('dotenv').config({path: '.env-dev'})

const {
  API_KEY,
  MONGO_PASS
} = process.env

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

// Main function aan roepen
main()

// Connectie maken met de database
function main() {
  MongoClient
    // Maakt de connectie met de database
    .connect(`mongodb+srv://codingthecurbsminor2022:${MONGO_PASS}@codingthecurbs.ln7wtad.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

  .then(connection => {

    let Reservation = {
      time: '',
      email: '',
      kenteken: ''
    }
    
    const db = connection.db('reservations')
    const reservationsCollection = db.collection('dcderservations')

    // Create a home route
    app.get('/', (req, res) => {
      res.render('timelist', {
        title: 'Coding the Curbs'
      });
    })

    app.get('/manage', (req, res) => {
      reservationsCollection.find().toArray()
      .then(results => {
        res.render('manage', {
          title: 'Manage your reservation',
          reservationdata: results,
          data: Reservation
        });
      })
    })

    app.post('/reserve', (req, res) => {
      reservationsCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/manage')
        })
        .catch(error => console.error(error))
    })

    app.get('/timelist', (req, res) => {
      res.render('timelist', {
        title: 'Timelist'
      })
    })




    app.post('/addtime', (req, res) => {
          res.render('index', {
            title: 'Coding the Curbs',
            time: req.body.time
          })
    })
  })
}

// Offline page
app.get('/offline', (req, res) => {
  res.render("offline", {
    title: "You are Offline"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})