export const verifyRoute = async (req, res) => {
  res.render('verify',{
    title: 'Verifieer je kenteken',
    errorMessage: ''
  })
}