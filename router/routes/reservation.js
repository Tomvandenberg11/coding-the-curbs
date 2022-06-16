import {reservationsCollection} from './../../app.js'

export const reservationRoute = async (req, res) => {
  console.log(req.body);
  reservationsCollection.insertOne(req.body)
    .then(() => res.redirect('/successful'))
    .catch(error => console.error(error))
}