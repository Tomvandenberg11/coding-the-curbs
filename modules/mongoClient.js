import MongoClient from 'mongodb'
import * as dotenv from 'dotenv'

export let reservationsCollection
export let Reservation = {
  time: '',
  email: '',
  kenteken: '',
  code: ''
}

const {
  MONGO_PASS,
} = process.env
dotenv.config()

export const connectDB = () => {
  MongoClient
    .connect(`mongodb+srv://codingthecurbsminor2022:${MONGO_PASS}@codingthecurbs.ln7wtad.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(connection => {
      const db = connection.db('reservations')
      reservationsCollection = db.collection('dcderservations')
    })
}
