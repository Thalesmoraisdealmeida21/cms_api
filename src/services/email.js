const nodemailer = require("nodemailer");


const sendMailContact = (dataMessage) => {


  


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


const sendMail= (from, to, subject, message) =>{
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "thalesmoraisdealmeida@outlook.com", // generated ethereal user
      pass: "tma211097  " // generated ethereal password
    }
  })

  console.log("thalesmoraisdealmeida@outlook.com")

  transporter.sendMail({
    from: "thalesmoraisdealmeida@outlook.com",
    to: to,
    subject: subject,
    html: message
  })


}



module.exports = { sendMailContact, sendMail }