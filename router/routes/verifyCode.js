import Mailer from "../../modules/mailer.js";

export const verifyCodeRoute = async (req, res) => {
  const email = req.body.email
  const plate = req.body.kenteken
  Mailer(email, plate)

  res.render("timelist", {
    title: "Verifieer je kenteken"
  })
}