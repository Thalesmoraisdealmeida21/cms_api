const nodemailer = require("nodemailer");
const emailConfig = require("./../database/models/ConfigEmail");









const  sendMailContact =  async (dataMessage) => {

 
     emailConfig.findOne().then((configEmail)=>{

      console.log(configEmail.secure)

    

      const transporter = nodemailer.createTransport({
        host: configEmail.host,
        port: configEmail.port,
        secure: configEmail.secure, 
        auth: {
          user: configEmail.user,
          pass: configEmail.password
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

     let info = transporter.sendMail({
      from: configEmail.user,
      to: "thalesalmeida@aluno.santoangelo.uri.br",
      subject: dataMessage.assunto,
      html: mensagem
    })

    info.then((retMessage)=>{
      console.log(retMessage);
    })
  })
  

  return true

  
  

 

    
}





module.exports = { sendMailContact }