const { sendMail } = require('./../services/email')

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

            
        
        }
    }
}