/*const contact = require('./../controllers/ContactController');
const Contact = contact();*/

const authRequest = require('./../../middleware/auth')
const AreaAtuacao = require('./../controllers/AreaAtuacaoController');
const AreaAtuacaoController = AreaAtuacao();



module.exports = (router) => {

    router.post('/areas-atuacao/create', authRequest, (req, res)=>{
        AreaAtuacaoController.create(req, res);
    })


    router.get('/areas-atuacao/find/:id', (req, res)=>{
        AreaAtuacaoController.getOne(req, res);
    })


    router.get('/areas-atuacao/find', (req, res)=>{
        AreaAtuacaoController.getAll(req, res);
    })

    router.get('/areas-atuacao/delete/:id', (req, res)=>{
        AreaAtuacaoController.deleteOne(req, res);
    })

  
}
