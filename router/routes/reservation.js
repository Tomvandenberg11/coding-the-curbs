import {reservationsCollection} from './../../modules/mongoClient.js'

export const reservationRoute = async (req, res) => {
  const reservation = req.body
  const randomCode = Math.floor(1000 + Math.random() * 9000)
  reservation.code = randomCode

  reservationsCollection.insertOne(reservation)
    .then(() => res.redirect('/successful'))
    .catch(error => console.error(error))
}