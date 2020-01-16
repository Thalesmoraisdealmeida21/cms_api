const PostCotroller = require('./../controllers/PostController')
const Post = PostCotroller();

module.exports = (router) => {
    
    router.post("/post", (req, res)=>{
        Post.createPost(req, res);
    })
    
    router.get("/posts", (req, res)=>{
       Post.getAllPosts(req, res);
    })

    router.post("/upload", (req, res)=>{
        const formidable = require('formidable');
        var path = require('path');
        var fs = require('fs');
        const form = new formidable.IncomingForm();

   
        form.parse(req, function(err, fields, files){

            
            fs.rename(files.capa.path,  path.join(__dirname, "../images/", files.capa.name), (err)=>{
                        if(err){
                            res.end('Falha ao renomear o arquivo')
                        }
                        console.log(err)
            })

            const pathImg = "images/" + files.capa.name
            
            res.json({"file": files, "pathImg": pathImg})

          
           
 
        })

    

        form.uploadDir = path.join(__dirname, "../images/")
        
       
     })

   

    router.get("/post/:id", (req, res)=>{
        Post.getOnePost(req, res);
     })

    router.delete("/post/:id", (req, res)=>{
        Post.deletePost(req, res);
    })



    router.post("/post/update/:id", (req, res)=>{
        Post.updatePost(req, res);
    })

  


     router.get("/post/search/title", (req, res)=>{
        Post.getPostByTitle(req, res);
     })

     router.get("/post/search/descricao", (req, res)=>{
        Post.getPostByDescription(req, res);
     })
    
}
