const nodemailer = require("nodemailer");
const emailConfig = require("./../database/models/ConfigEmail");

const configEmail = null







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

emailConfig.findOne().then((configEmail)=>{

    const transporter = nodemailer.createTransport({
      host: configEmail.host,
      port: configEmail.port,
      secure: configEmail.secure, 
      auth: {
        user: configEmail.user,
        pass: configEmail.password
      }
    })
    transporter.sendMail({
      from: configEmail.user,
      to: to,
      subject: subject,
      html: message
    })

})


}



module.exports = { sendMailContact, sendMail }