const express = require('express');
const router  = express.Router();

require('./User')(router)
require('./Post')(router)

router.get("/", (req, res)=>{
    res.json({"msg": "Aplicação está sendo executada ;)"})
})





module.exports = router;