

module.exports = (router) => {
    
    router.post("/post/:id", (req, res)=>{
        res.json({msg: "Está rota vai atualizar um post de código " + req.params.id })
    })
    
    router.delete("/post/:id", (req, res)=>{
        res.json({msg: "Está rota vai deletar um post de código " + req.params.id })
    })
    
}
