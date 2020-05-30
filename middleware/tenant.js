const User = require('./../src/database/models/User')

module.exports = (req, res, next) => {


    

      const tenant = req.headers.tenant
            console.log("Tenant: " + tenant)
      if(tenant){

        User.findByPk(tenant).then((tenant)=> {
            if(tenant){
                return next();
            } else {
                return res.status(401).json({msg: "Tenant informado não existe !"})
            }
        })
        
      } else {
          return res.status(401).json({msg: "Não informado o tenant"})
      }


 


  
}