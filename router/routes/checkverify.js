import {reservationsCollection} from "../../app.js";

export const checkVerifyRoute = async (req, res) => {
  const code = req.body.code

  reservationsCollection.find().toArray()
    .then((result) => {
      result.filter = (obj, predicate) =>
        Object.assign(...Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .map( key => ({ [key]: obj[key] }) ) )

      let filtered = result.filter(result, item => item.code === code)
      filtered = filtered[Object.keys(filtered)[0]]
      console.log(filtered)

      res.render('manage', {
        title: 'Manage your reservation',
        reservation: filtered,
      })
    })
}