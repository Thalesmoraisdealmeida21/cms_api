const user = require('./../controllers/UserController')
const User = user()
const authRequest = require('./../../middleware/auth');


module.exports = (router) => {

    router.post("/user", /*authRequest,*/ (req, res)=>{
        User.createUser(req, res)
    })
    
    router.get("/users", authRequest, (req, res)=>{
       User.listUserAll(req, res)
    })
}

