const emailController = require('./../controllers/emailController');
const email = emailController(); 
module.exports = (router) => {


    router.post("/sendmail", (req, res)=>{
        email.sendMail(req, res);
    })
}