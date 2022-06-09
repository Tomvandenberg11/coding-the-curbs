export const noworlater = async (req, res) =>{
  res.render('noworlater', {
    title: 'Wanneer wil je reserveren?',
    time: req.body.time
  })
}