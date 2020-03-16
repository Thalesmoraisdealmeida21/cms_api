const areasAtuacao = require('./../database/models/AreasAtuacao')

module.exports = () =>{
    return {
        create: (req, res)=>{
            const {nome, descricao, icone}  = req.body
            areasAtuacao.create({
                nome: nome,
                descricao: descricao,
                icone: icone

            }).then((areaCreated)=>{
                res.status(200).json(areaCreated)
            })
        },
        update: (req, res)=>{
                const {nome, descricao} = req.body
                const {id} = req.params

                areasAtuacao.update({
                    nome: nome,
                    descricao: descricao 
                }, {
                    where:{
                        id: id
                    }  
                }).then((respon)=>{
                    res.status(200).json(respon)
                })
        },
         
        getByName: (req, res)=>{
            const {name} = req.params;

            areasAtuacao.findOne({
                where: {
                    nome: name
                }
            }).then((areaAtuacao)=>{
                res.status(200).json(areaAtuacao)
            })
        },
        getAll: (req, res)=>{
            areasAtuacao.findAll().then((areasAtuacao)=>{
                res.status(200).json(areasAtuacao);
            })
        },

        getOne: (req, res)=>{
            const id = req.params.id

            areasAtuacao.findByPk(id).then((areaFound)=>{
                res.json(areaFound)
            })
        },

        deleteOne: (req, res)=>{
            const id = req.params.id

            areasAtuacao.destroy({
                where: {
                    id: id
                }
            }).then((result)=>{
                res.json(result);
            })

        }
    }
}