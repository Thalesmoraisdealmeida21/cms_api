const jsonwebtoken = require('jsonwebtoken')
const User = require('../database/models/User');
const blacklist = require('../database/models/Blacklist')
const {secret} = require('../config/config')
const bcrypt = require('bcrypt')
module.exports = () =>{
    return {
        authenticate: (req, res)=>{

            const { username, password } = req.body;
            


            
            User.findOne({
                where: {
                    username: username,
                  
                }
            }).then((userFound)=>{
                
                if(userFound){
                   
                    bcrypt.compare(password, userFound.password, (err, result)=>{
                        if(result){
                            const token = jsonwebtoken.sign({
                                username: username,
                                password: password
                            },
                                secret
                             )
                            res.status(200).json({"token": token})
                        } else {
                            res.status(401).json({msg: "Senha Inválida"})
                        }                        
                        if(err){
                           
                            res.status(401).json(err);
                        }
                    })
                  
                } else {
                    res.status(401).json({msg: "Usuário não encontrado"})
                }
            })
        },

        logout: (req, res)=>{

            const token = req.headers.authorization


            blacklist.findAll({
                where: {
                    token: token
                }
            }).then((foundToken)=>{
               
                if(foundToken.length <= 0){
                    console.log("entrou aki");
                    blacklist.create({
                        token: token
                    })
                    return res.status(200).end();
                } else {
                    return res.status(200).end();
                }
            })
     

          

           

        }
    }
}