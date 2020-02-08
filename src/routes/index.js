const express = require('express');
const router  = express.Router();

require('./User')(router)
require('./Post')(router)
require('./Auth')(router)
require('./Contact')(router)
router.get("/", (req, res)=>{
    res.json({"msg": "Aplicação está sendo executada ;)"})
})





module.exports = router;