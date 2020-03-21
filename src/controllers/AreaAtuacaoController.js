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
                const {nome, descricao, icone} = req.body
                const {id} = req.params

                areasAtuacao.update({
                    nome: nome,
                    descricao: descricao, 
                    icone: icone
                }, {
                    where:{
                        id: id
                    }  
                }).then((respon)=>{
                    res.status(200).json(respon)
                })
        },
         

        uploadImage: (req, res)=>{
            const formidable = require('formidable');
            var path = require('path');
            var fs = require('fs');
            const form = new formidable.IncomingForm();

            form.parse(req, function(err, field, files){
                

                    fs.rename(files.icone.path, path.join(__dirname, "../images/areasatuacao", files.icone.name), (err)=>{
                        if(err){
                            res.end('Falha ao renomear o arquivo');
                        }
                    })

                    console.log(files.icone.path)

                    const pathImg = "images/areasatuacao/" + files.icone.name
                    res.json({"file": files, "pathImg": pathImg})
            })

            form.uploadDir = path.join(__dirname, "../images/areasatuacao/")
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