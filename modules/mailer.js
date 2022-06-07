import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'codingthecurbs@gmail.com',
    pass: 'swag1234$'
  }
});

const mailOptions = {
  from: 'codingthecurbs@gmail.com',
  to: 'tomvandenberg11@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

const Mailer = () => {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export default Mailer