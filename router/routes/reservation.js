import {reservationsCollection} from './../../modules/mongoClient.js'

export const reservationRoute = async (req, res) => {
  reservationsCollection.insertOne(req.body)
    .then(() => res.redirect('/successful'))
    .catch(error => console.error(error))
}