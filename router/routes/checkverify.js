import {reservationsCollection} from './../../modules/mongoClient.js'

export const checkVerifyRoute = async (req, res) => {
  const code = req.body.code
  let filtered

  reservationsCollection.find().toArray()
    .then((result) => {
      result.filter = (obj, predicate) =>
        Object.assign(...Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .map(key => ({
            [key]: obj[key]
          })))

      filtered = result.filter(result, item => item.code === code)
      filtered = filtered[Object.keys(filtered)[0]]
    })
    .then(() => {
      res.render('manage', {
        title: 'Manage your reservation',
        reservation: filtered,
        errorMessage: ''
      })
    })
    .catch(() => {
      res.render("checkVerify", {
        title: "Verifieer je kenteken",
        errorMessage: 'Je bevestigingscode is onjuist. Probeer het opnieuw.'
      })
    })
}