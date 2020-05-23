const user = require('./../controllers/UserController')
const User = user()
const authRequest = require('./../../middleware/auth');


module.exports = (router) => {

    router.post("/user", (req, res)=>{
        User.createUser(req, res)
    })

    router.get("/user/:id", authRequest, (req, res)=>{
        User.getUserById(req, res);
    })
    
    router.get("/users", authRequest, (req, res)=>{
       User.listUserAll(req, res)
    })
}

