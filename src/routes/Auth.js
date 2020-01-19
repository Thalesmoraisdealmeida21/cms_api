const AuthController = require('../controllers/AuthController')
const auth = AuthController();
const authRequest = require('./../../middleware/auth')
const jsonwebtoken = require('jsonwebtoken')

module.exports = (router) => {


    router.post('/login', (req, res)=>{
        auth.authenticate(req, res);
    })

    router.post('/logout', (req, res)=>{
        auth.logout(req, res);
    })

    router.post('/testeAuth', authRequest, (req, res)=>{
        res.end("parabéns voce está autenticado")
    });



}