
const User = require('./../database/models/User')


module.exports = () => {
    return {
        createUser: (req, res)=>{
            const saltRounds = 10;
            
            data = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
            
            User.create({
                username: data.username,
                email: data.email,
                password: hash
              }).then((user)=>{
                  if(user){
                      res.json(user)
                  } 
              })

              /*  bcrypt.genSalt(saltRounds, (err, salt)=>{
                    bcrypt.hash(data.password, salt, (err, hash)=>{
                      
                    })
                })*/

        



            
        },

        listUserAll: (req, res)=> {
                User.findAll().then((users)=>{
                    res.json(users)
                }
            )}
    }
}