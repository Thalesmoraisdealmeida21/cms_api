const User = require('../database/models/User')



module.exports = () => {
    return {
        createUser: (req, res)=>{
            data = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
            const usuario = User.create({
              username: data.username,
              email: data.email,
              password: data.password
            })

            res.status(200).json(usuario)
        },

        listUserAll: (req, res)=> {
            User.findAll().then((users)=>{
                res.json(users)
            })
        }
    }
}