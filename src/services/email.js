const nodemailer = require("nodemailer");


const sendMailContact = (dataMessage) => {


    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "thalesmoraisdealmeida@outlook.com", // generated ethereal user
          pass: "tma211097" // generated ethereal password
        }
    })


    let mensagem = `
      <h1>Contato via Site</h1>
      <p>
        <b>Nome: </b> ` + dataMessage.nome  + `<br />
        <b>E-mail: </b>  ` + dataMessage.email  + `<br />
        <b>Assunto: </b>  ` + dataMessage.assunto  + `<br />
        <b>Mensagem: </b> ` + dataMessage.mensagem  + `
      </p> `
    
    transporter.sendMail({
      from: '"Contato Via Site"',
      to: "thales.morais21@gmail.com",
      subject: dataMessage.assunto,
      html: mensagem
    });
}

module.exports = { sendMailContact }