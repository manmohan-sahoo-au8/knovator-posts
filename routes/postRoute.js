const express = require("express")
const router = express.Router()
const {getPosts,addPost,deletePost,updatePost} = require("../controller/postController")

router
  .route("/")
  .get(getPosts)
  .post(addPost)

router
  .route("/:_id")
  .delete(deletePost)

router
  .route("/:_id")
  .put(updatePost)

module.exports = router