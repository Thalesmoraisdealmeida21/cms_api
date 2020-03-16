/*const contact = require('./../controllers/ContactController');
const Contact = contact();*/

const authRequest = require('./../../middleware/auth')
const AreaAtuacao = require('./../controllers/AreaAtuacaoController');
const AreaAtuacaoController = AreaAtuacao();



module.exports = (router) => {

    router.post('/areas-atuacao/create', authRequest, (req, res)=>{
        AreaAtuacaoController.create(req, res);
    })

    router.get('/areas-atuacao/find/:name', (req, res)=>{
        AreaAtuacaoController.getByName(req, res);
    })

    router.get('/areas-atuacao/find/id/:id', authRequest, (req, res)=>{
        AreaAtuacaoController.getOne(req, res);
    })

    router.post('/areas-atuacao/update/:id', authRequest, (req, res)=>{
        AreaAtuacaoController.update(req, res);
    })

 


    router.get('/areas-atuacao/find', (req, res)=>{
        AreaAtuacaoController.getAll(req, res);
    })

    router.delete('/areas-atuacao/delete/:id', (req, res)=>{
        AreaAtuacaoController.deleteOne(req, res);
    })

  
}
