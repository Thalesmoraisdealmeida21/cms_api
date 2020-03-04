const PostCotroller = require('./../controllers/PostController')
const Post = PostCotroller();
const authRequest = require('./../../middleware/auth')

module.exports = (router) => {
    
    router.post("/post", authRequest, (req, res)=>{
        Post.createPost(req, res);
    })
    
    router.get("/posts", (req, res)=>{
       Post.getAllPosts(req, res);
    })

    router.get("/posts/:page", (req, res)=>{
        Post.getAllPostsPaginated(req, res);
     })

    router.post("/upload", authRequest, (req, res)=>{
            Post.uploadImage(req, res);
     })

   

    router.get("/post/:id", (req, res)=>{
        Post.getOnePost(req, res);
     })

    router.delete("/post/:id", authRequest, (req, res)=>{
        Post.deletePost(req, res);
    })



    router.post("/post/update/:id", authRequest, (req, res)=>{
        Post.updatePost(req, res);
    })

  


     router.get("/post/search/title/:title", authRequest, (req, res)=>{
        Post.getPostByTitle(req, res);
     })

     router.get("/post/search/descricao", (req, res)=>{
        Post.getPostByDescription(req, res);
     })
    
}
