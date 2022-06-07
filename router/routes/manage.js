import {reservationsCollection, Reservation} from './../../app.js'

export const manageRoute = async (req, res) =>{
  reservationsCollection.find().toArray()
    .then(results => {
      res.render('manage', {
        title: 'Manage your reservation',
        reservationdata: results,
        data: Reservation
      });
    })
}