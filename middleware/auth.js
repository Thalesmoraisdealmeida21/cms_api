const jsonwebtoken = require('jsonwebtoken')
const blacklist = require('../src/database/models/Blacklist');
const { secret } = require('../src/config/config')


module.exports = (req, res, next) =>{
    const token = req.headers.authorization
 

    jsonwebtoken.verify(token, secret, (err, decoded)=>{
       if(err){
           res.status(401).end();
       } else {
        blacklist.findAll({
            where: {
                token: token
            }
        }).then((tokenFound)=>{
            if(tokenFound.length > 0){
                res.status(401).end();
            }
            return next();
        })
       }

      

       console.log(decoded)
   
   })

}