const emailController = require('./../controllers/emailController');
const email = emailController(); 
const authRequest = require('./../../middleware/auth')
module.exports = (router) => {


    router.post("/sendmail", (req, res)=>{
        email.sendMail(req, res);
    })


    router.post("/email/initconfig", authRequest, (req, res)=>{
        email.initConfig(req, res)
    })

    router.post("/email/setconfig", authRequest, (req, res)=>{
        email.setConfig(req, res)
    })

    router.get("/email/getconfig", authRequest, (req, res)=>{
        email.getConfig(req, res);
    })
}