import {reservationsCollection} from './../../modules/mongoClient.js'


export const checkVerifyRoute = async (req, res) => {
  const code = req.body.code

  reservationsCollection.find().toArray()
    .then((result) => {
      result.filter = (obj, predicate) =>
        Object.assign(...Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .map(key => ({
            [key]: obj[key]
          })))

      let filtered = result.filter(result, item => item.code === code)
      filtered = filtered[Object.keys(filtered)[0]]

      res.render('manage', {
        title: 'Manage your reservation',
        reservation: filtered,
      })
    })
}