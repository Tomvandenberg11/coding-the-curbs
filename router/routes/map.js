export const mapRoute = async (req, res) =>{
  res.render('map', {
    title: 'Kaart',
    time: req.body.time
  })
}