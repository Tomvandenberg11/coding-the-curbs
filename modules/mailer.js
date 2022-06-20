import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'

const {
  MAIL_PASS
} = process.env
dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  secureConnection: false,
  auth: {
    user: 'codingthecurbs@gmail.com',
    pass: MAIL_PASS
  }
})

const Mailer = (email, plate, userCode) => {

  const mailOptions = {
    from: '"Coding the Curbs" <codingthecurbs@gmail.com',
    to: email,
    subject: 'Je bevestigingscode voor ' + plate,
    html: "Hallo!<br><p>Hierbij je bevestigingscode: <br><b>" + userCode + "</b><br><br>Hiermee kan je je reservering wijzigen of verwijderen. <br><br>Groetjes,<br>Coding the curbs</p>"
  }

  transporter.sendMail(mailOptions, function(error){
    if (error) {
      console.log(error);
    }
  })
}

export default Mailer