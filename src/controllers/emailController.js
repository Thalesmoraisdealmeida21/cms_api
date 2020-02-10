const { sendMail } = require('./../services/email')
const ConfigEmail = require('./../database/models/ConfigEmail')

module.exports = () => {
    return {
        sendMail: (req, res)=>{
            data = {
                to: req.body.to,
                from: req.body.from,
                subject: req.body.subject,
                message: req.body.message
            }

            console.log(data)
     
            sendMail(data.from, data.to, data.subject, data.message)

            res.json(data)

            
        
        },

        setConfig: (req, res)=>{
            const {host, port, secure, user, password} = req.body
            

            ConfigEmail.create({
                host: host,
                port: port,
                secure: secure,
                user: user,
                password: password
            }).then((emailConfig)=>{
                res.json(emailConfig)
            })

        },
        
        getConfig: (req, res)=>{
            ConfigEmail.findAll().then((config)=>{
                if(config){
                    res.json(config)
                } else {
                    res.json({msg: "Não existe configuração de e-mail cadastrada"})
                }
                
            })
        }
    }
}