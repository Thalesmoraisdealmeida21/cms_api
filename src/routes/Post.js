const PostCotroller = require('./../controllers/PostController')
const Post = PostCotroller();
const authRequest = require('./../../middleware/auth')
const tenantCheck = require('./../../middleware/tenant')

module.exports = (router) => {
    
    router.post("/post", authRequest, tenantCheck, (req, res)=>{
        Post.createPost(req, res);
    })
    
    router.get("/posts", tenantCheck, (req, res)=>{
       Post.getAllPosts(req, res);
    })

    router.get("/posts/count", tenantCheck, (req, res)=>{
        Post.countPosts(req, res);
     })
     
    router.get("/posts/:page", tenantCheck, (req, res)=>{
        Post.getAllPostsPaginated(req, res);
     })

     router.get("/posts/count", tenantCheck, (req, res)=>{
        Post.countPosts(req, res);
     })

    router.post("/upload", authRequest, tenantCheck, (req, res)=>{
            Post.uploadImage(req, res);
     })

   

    router.get("/post/:id", tenantCheck, (req, res)=>{
        Post.getOnePost(req, res);
     })

    router.delete("/post/:id", authRequest, tenantCheck, (req, res)=>{
        Post.deletePost(req, res);
    })



    router.put("/post/update/:id", authRequest, tenantCheck, (req, res)=>{
        Post.updatePost(req, res);
    })

  


     router.get("/post/search/title/:title", authRequest, tenantCheck, (req, res)=>{
        Post.getPostByTitle(req, res);
     })

     router.get("/post/search/descricao",  tenantCheck, (req, res)=>{
        Post.getPostByDescription(req, res);
     })
    
}
