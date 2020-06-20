const { sendMail } = require('./../services/email')
const ConfigEmail = require('./../database/models/ConfigEmail')
const nodemailer = require('nodemailer')

module.exports = () => {
    return {
        sendMail: async (req, res)=>{
            data = {
                to: req.body.to,
                from: req.body.from,
                subject: req.body.subject,
                name: req.body.name,
                telephone: req.body.telephone,
                email: req.body.email,
                message: req.body.message
            }

            let transporter = nodemailer.createTransport({
                host: "smtp.office365.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                  user: "thalesmoraisdealmeida@outlook.com", // generated ethereal user
                  pass: "thalesmorais211097", // generated ethereal password
                },
              });

              let info = await transporter.sendMail({
                from: 'thalesmoraisdealmeida@outlook.com', // sender address
                to: "thales.morais21@gmail.com", // list of receivers
                subject: "Contato Via Site", // Subject line
                text: "Hello world?", // plain text body
                html: `
                <h1>Contato Via Site</h1> <br />
                <strong>Nome: </strong> ${data.name} <br />
                <strong>E-mail: </strong> ${data.email}  <br />
                <strong>telephone: </strong> ${data.telephone}  <br />
                <strong>Assunto: </strong> ${data.subject}  <br />
                <strong>Mensagem: </strong> ${data.message}`, // html body
              });
         
           
              console.log("Message sent: %s", info.messageId);
              console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


              res.json({message: info.messageId})
              
        },

        setConfig: (req, res)=> {
            const {id, host, port, secure, user, password} = req.body

            ConfigEmail.update({
                host: host,
                secure: secure,
                port: port,
                user: user,
                password: password
                
            }, {
                where: {
                    id: id
                }
            }).then(success => res.json(success))

           
        },
        
        getConfig: (req, res)=>{
            ConfigEmail.findOne().then((config)=>{
                if(config){
                    res.json(config)
                } else {
                    res.end();
                }
                
            })
        }
    }
}