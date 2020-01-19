const express = require('express');
const router  = express.Router();

require('./User')(router)
require('./Post')(router)
require('./Auth')(router)
router.get("/", (req, res)=>{
    res.json({"msg": "Aplicação está sendo executada ;)"})
})





module.exports = router;