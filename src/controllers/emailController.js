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

     
            if(sendMail(data.from, data.to, data.subject, data.message)){
                res.json(data)
            } else {
                res.status(200).json({msg: "ocorreu um erro"})
            }

            

            
        
        },

        initConfig: (req, res)=>{
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