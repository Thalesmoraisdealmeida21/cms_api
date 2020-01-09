const express = require('express');
const router  = express.Router();
const user = require('./../controllers/UserController')
const User = user()


router.get("/", (req, res)=>{

})

router.post("/user", (req, res)=>{
     User.createUser(req, res)
})

router.get("/users", (req, res)=>{
    User.listUserAll(req, res)
})


router.post("/post/:id", (req, res)=>{
    res.json({msg: "Está rota vai atualizar um post de código " + req.params.id })
})

router.delete("/post/:id", (req, res)=>{
    res.json({msg: "Está rota vai deletar um post de código " + req.params.id })
})




module.exports = router;