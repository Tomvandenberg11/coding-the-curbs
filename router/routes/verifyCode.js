import Mailer from "../../modules/mailer.js";

export const verifyCodeRoute = async (req, res) =>{
  Mailer()
  res.render("verify", {
    title: "Verifieer je kenteken"
  });
}