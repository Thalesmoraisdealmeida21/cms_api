const User = require('../database/models/User')


module.exports = () => {
    return {
        createUser: (req, res)=>{
            data = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }


            User.create({
              username: data.username,
              email: data.email,
              password: data.password
            }).then((user)=>{
                if(user){
                    res.json(user)
                }
                
                res.json(false)
            })

           
        },

        listUserAll: (req, res)=> {
                User.findAll().then((users)=>{
                    res.json(users)
                }
            )}
    }
}