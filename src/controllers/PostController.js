
const ModelPost = require('./../database/models/Post')
const Op = require('sequelize').Op

module.exports = () =>{
    return {
        createPost: (req, res)=>{
            const data = {
                titulo: req.body.titulo,
                descricao: req.body.descricao
            }

            ModelPost.create({
                titulo: data.titulo,
                descricao: data.descricao
            }).then((userCreated)=> {
                res.status(201).json(userCreated)
            })
        },

        getAllPosts: (req, res)=>{
                ModelPost.findAll().then((posts)=>{
                    res.status(200).json(posts)
                })
        },

        getOnePost: (req, res)=>{
                const postId = req.params.id

                ModelPost.findByPk(postId).then((post)=>{
                    res.status(200).json(post);
                })
        },

        deletePost: (req, res)=>{
            const postId = req.params.id
            
            ModelPost.destroy({where: {
                id: postId
            }}).then((resposta)=>{
             
                if(resposta > 0) {
                    res.status(200).json({
                        msg: "Usuario deletado com sucesso",
                        status: true,
                        userDeleted: resposta
                    })
                } else {
                    res.status(200).json({
                        msg: "Não foi possivel deletar o usuario",
                        status: false,
                        userDeleted: resposta
                    })
                }
            })
        },  

        updatePost: (req, res)=>{
                const postId = req.params.id
                const data = {
                    titulo: req.body.titulo,
                    descricao:  req.body.descricao
                }

                ModelPost.update({
                    titulo: data.titulo,
                    descricao: data.descricao
                }, {
                    where: {
                    id: postId
                }, 
            }).then((retorno)=>{
                if(retorno > 0){
                    res.status(200).json({
                        msg: "Post atualizado com sucesso",
                        status: true,
                        nRegistros: retorno
                    })
                } else {
                    res.status(200).json({
                        msg: "Não foi possivel efetuar a alteração do registro",
                        status: false,
                        nRegistros: retorno
                    })
                }
                
            })
  
        },

        getPostByTitle: (req, res)=>{
            const titulo = req.body.titulo;

            ModelPost.findAndCountAll({
                where: {
                    titulo:{
                        [Op.like]: '%' + title + '%'
                    } 
                }
            }).then((post)=>{
                res.status(200).json(post)
            })
        },
        getPostByDescription: (req, res)=>{
            const descricao = req.body.descricao;

            ModelPost.findAndCountAll({
                where: {
                    descricao:{
                        [Op.like]: '%' + descricao + '%'
                    } 
                }
            }).then((post)=>{
                res.status(200).json(post)
            })
        },
    
    }
}