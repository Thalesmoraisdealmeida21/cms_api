const Contact = require('./../database/models/Contact');
const { sendMailContact } = require('./../services/email')


module.exports = () => {
    return {
        saveContact: (req, res)=>{
                const data = {
                    nome: req.body.nome,
                    email: req.body.email,
                    telefone: req.body.telefone,
                    assunto: req.body.assunto,
                    mensagem: req.body.mensagem
                }


                Contact.create({
                    nome: data.nome,
                    email: data.email,
                    telefone: data.telefone,
                    assunto: data.assunto,
                    mensagem: data.mensage
                }).then((contact)=>{
                    res.status(201).json(contact);
                })


                try {
                    sendMailContact(data);
                } catch (e){
                    res.status(400).json(e);

                }
        },
        
        deleteContact: (req, res)=>{
            const idContact = req.params.idContact;

            Contact.destroy({
                where: {
                    id: idContact
                }
            }).then((nRegAlterados)=>{
                res.json(nRegAlterados)
            })
                
        },
        
        getOneContactById: (req, res)=>{
            const idContact = req.params.idContact


            Contact.findByPk(idContact).then((contact)=>{
                res.json(contact);
            })

           

        },
        
        getAllContacts: (req, res)=>{
            Contact.findAll().then((contacts)=>{
                res.json(contacts)
            })
        },

        sendMailOfContact: (req, res)=> {

        }
    }
}