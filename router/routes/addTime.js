export const addTimeRoute = async (req, res) =>{
  const time = req.body.time.toString()
  const timeBeginEnd = time.split(",")
  res.render('index', {
    title: 'Coding the Curbs',
    time: timeBeginEnd[0] + ' ' + timeBeginEnd[timeBeginEnd.length - 1],
  })
}