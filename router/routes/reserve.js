import {reservationsCollection} from './../../app.js'

export const reserveRoute = async (req, res) =>{
  reservationsCollection.insertOne(req.body)
    .then(result => {
      res.redirect('/manage')
    })
    .catch(error => console.error(error))
}