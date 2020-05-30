const path = require("path");
const multer = require("multer");
const ModelPost = require('./../database/models/Post')
const Op = require('sequelize').Op

const storage = multer.diskStorage({
    destination: "./../images/",
    filename: function(req, file, cb){
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
})


const upload =  multer({
    storage: storage,
    limits: {fileSize: 1000000}
}).single("myImage");


module.exports = () =>{
    return {
        createPost: (req, res)=>{
            const data = {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                resumo: req.body.resumo,
                imgCapa: req.body.imgCapa,
                tenant: req.body.tenant
            }


           
            


            
                ModelPost.create({
                    titulo: data.titulo,
                    descricao: data.descricao,
                    resumo: data.resumo,
                    imgCapa: data.imgCapa,
                    userTenant: data.tenant
                }).then((userCreated)=> {
                    res.status(201).json(userCreated)
                })
            



     

            

           
        },

        getAllPosts: (req, res)=>{
                const tenant = req.body.tenant
                ModelPost.findAll({where: { userTenant: tenant }}).then((posts)=>{
                    res.status(200).json(posts)
                })
        },

        getOnePost: (req, res)=>{
                const postId = req.params.id
                const tenant = req.body.tenant
                

                ModelPost.findOne({where: {userTenant: tenant, id: postId}}).then((post)=>{
                    res.status(200).json(post);
                })
        },

        deletePost: (req, res)=>{
            const postId = req.params.id
            const tenant = req.body.tenant
            ModelPost.destroy({where: {
                id: postId, 
                userTenant: tenant
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
                const tenant = req.body.tenant

                const data = {
                    titulo: req.body.titulo,
                    descricao:  req.body.descricao,
                    resumo:  req.body.resumo,
                    imgCapa: req.body.imgCapa
                }

                ModelPost.update({
                    titulo: data.titulo,
                    descricao: data.descricao,
                    resumo: data.resumo,
                    imgCapa: data.imgCapa
                }, {
                    where: {
                    id: postId,
                    tenant: tenant
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
            const { title }= req.params;
            const tenant = req.body.tenant
        
            if(title == "none"){
                ModelPost.findAll({where: {userTenant: tenant}}).then((posts)=>{
                    res.status(200).json(posts)
                })
            } else {
                ModelPost.findAll({
                    where: {
                        titulo:{
                            [Op.like]: '%' + title + '%'
                        },
                        tenant: tenant
                    }
                }).then((post)=>{
                    res.status(200).json(post)
                })
            }

            
        },
        getPostByDescription: (req, res)=>{
            const descricao = req.body.descricao;
            const tenant = req.body.tenant

            ModelPost.findAndCountAll({
                where: {
                    descricao:{
                        [Op.like]: '%' + descricao + '%'
                    },
                    tenant: tenant 
                }
            }).then((post)=>{
                res.status(200).json(post)
            })
        },
    
        uploadImage: (req, res)=>{

            const formidable = require('formidable');
            var path = require('path');
            var fs = require('fs');
            const form = new formidable.IncomingForm();
    
       
            form.parse(req, function(err, fields, files){
    
                
                fs.rename(files.capa.path,  path.join(__dirname, "../images/", files.capa.name), (err)=>{
                            if(err){
                               
                                res.end('Falha ao renomear o arquivo')
                            }
                            
                })


                console.log(files.capa.path)
    
                const pathImg = "images/" + files.capa.name
                res.json({"file": files, "pathImg": pathImg})
    
              
               
     
            })
    
        
    
            form.uploadDir = path.join(__dirname, "../images/")
        },

        getAllPostsPaginated: (req, res)=>{
            const page = parseInt(req.params.page)
            const tenant = req.body.tenant
            const offsetPage = ((page - 1) * 3);
            if(offsetPage < 0){
                res.status(300).json({msg: "Número da página informado é invalido"})
            } else {
                ModelPost.findAll({
                    limit: 3,
                    offset: offsetPage,
                    order: [
                        
                        ['createdAt', 'DESC'],
                    ],

                    where: {
                        userTenant: tenant

                    }
                      
                }).then((posts)=>{
                    res.json(posts)
                })
            }
          
        },

        countPosts: (req, res)=>{
            ModelPost.findAndCountAll({where: {userTenant: tenant}}).then((postsCounteds)=>{
                    res.json(postsCounteds);
            })  
        }
    }
}