const user = require('./../controllers/UserController')
const User = user()


module.exports = (router) => {

    router.post("/user", (req, res)=>{
        User.createUser(req, res)
    })
    
    router.get("/users", (req, res)=>{
       User.listUserAll(req, res)
    })
}

