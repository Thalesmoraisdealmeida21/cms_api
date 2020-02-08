const contact = require('./../controllers/ContactController');
const Contact = contact();



module.exports = (router) => {


    router.post("/contato", (req, res)=>{
        Contact.saveContact(req, res);
    })

    router.delete("/contato/:idContact", (req, res)=>{
        Contact.deleteContact(req, res);
    })

    router.get("/contatos", (req, res)=>{
        Contact.getAllContacts(req, res);
    })


    router.get("/contato/:idContact", (req, res)=>{
        Contact.getOneContactById(req, res);
    })
}
