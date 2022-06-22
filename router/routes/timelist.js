export const timeListRoute = async (req, res) => {
  res.render('timelist', {
    title: 'Time list',
    date: req.body.date
  })
}