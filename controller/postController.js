const postModel = require("../model/postModel")


//get all posts

exports.getPosts = async (req,res,next) => {
  try{
    const posts = await postModel.find()

    return res.status(200).json({
      success:true,
      data:posts
    })
  } catch(err){
    console.error(err)
    res.status(500).json({error:"Server error"})
  }
}

//create a post

exports.addPost = async (req,res,next) => {
  try{

    const post = await postModel.create(req.body)

    return res.status(200).json({
      success:true,
      data:post
    })

  } catch(err){
    console.error(err)
    res.status(500).json({error:"Server error"})
  }
}

//delete a post

exports.deletePost = async (req,res,next) => {
  try{

    const post = await postModel.findByIdAndRemove(req.body.id)

    return res.status(200).json({
      success:true,
      message:"data deleted successfully"
    })

  } catch(err){
    console.error(err)
    res.status(500).json({error:"Server error"})
  }
}

//update a post

exports.updatePost = async (req,res,next) => {
  try{

    const post = await postModel.findByIdAndUpdate(req.body.id)

    return res.status(200).json({
      success:true,
      data:post
    })

  } catch(err){
    console.error(err)
    res.status(500).json({error:"Server error"})
  }
}