const emailController = require('./../controllers/emailController');
const email = emailController(); 
module.exports = (router) => {


    router.post("/sendmail", (req, res)=>{
        email.sendMail(req, res);
    })


    router.post("/email/setconfig", (req, res)=>{
        email.setConfig(req, res)
    })
}