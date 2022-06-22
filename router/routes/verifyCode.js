import Mailer from "../../modules/mailer.js";
import {reservationsCollection} from './../../modules/mongoClient.js'

export const verifyCodeRoute = async (req, res) => {
  const email = req.body.email
  const plate = req.body.kenteken
  let userCode, allReservations

  reservationsCollection.find().toArray()
    .then(result => {
      allReservations = result
    })
    .then(() => {
      allReservations.filter = (obj, predicate) =>
        Object.assign(...Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .map( key => ({ [key]: obj[key] }) ) )

      let filtered = allReservations.filter(allReservations, item => item.email === email && item.kenteken === plate)
      filtered = filtered[Object.keys(filtered)[0]]

      userCode = filtered.code
    })
    .then(() => {
      Mailer(email, plate, userCode)
    })
    .then(() => {
      res.render("checkVerify", {
        title: "Verifieer je kenteken",
        errorMessage: ''
      })
    })
    .catch(() => {
      res.render("verify", {
        title: "Verifieer je kenteken",
        errorMessage: 'Er is geen reservering gevonden met deze kenteken + e-mail combinatie. Probeer het opnieuw.'
      })
    })

}