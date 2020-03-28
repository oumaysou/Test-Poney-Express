const nodemailer = require("nodemailer");

function mailerTo(email, name, password) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "willfln34@gmail.com",
      pass: "matcha1234"
    }
  });

  var mailOptions = {
    from: '"Poney Express" <wadii.zaim@essec.edu>',
    to: email,
    subject: `Welcome ${name} To Our MailBox`,
    text: `Hello! ${name},\nWelcome to MailBox website.\nPlease use this password: ${password} and your email: ${email} to use our service.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
}

module.exports = mailerTo;
