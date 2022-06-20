// IMPORT MODULES
import express from 'express'
const app = express()
import compression from 'compression'
import bodyParser from 'body-parser'

import 'dotenv/config.js'
import {router} from './router/router.js'
import {connectDB} from './modules/mongoClient.js'


// SETTINGS GLOBAL VARIABLES
const port = process.env.PORT || 1234

// LINKING TEMPLATE ENGINE TO EXPRESS
app.set('view engine', 'ejs')

// TELLING EJS WHERE THE VIEWS ARE
app.set('views', 'views')

// SETTING CACHE CONTROL
app.use(/.*-[0-9a-f]{10}\..*/, (req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=365000000, immutable')
  next()
})

// INITIALIZE STATIC FOLDER, COMPRESSION, BODYPARSER AND ROUTER
app.use(express.static('static'))
app.use(compression())
app.use(bodyParser())
app.use(router)

// MAKE CONNECTION TO DATABASE MODULE
connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})