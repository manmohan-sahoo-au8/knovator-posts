const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
  title:String,
  body:String,
  createdBy:String,
  isActive:{
    type:Boolean
  },
  location: {
    type: {
      type: String, 
      enum: ['Point'], 
     
    },
    coordinates: {
      type: [Number],
      index: "2dsphere" //upports quiries that calculate geimetries 
    },
    formattedAddress:String
  }
})



module.exports = mongoose.model("Posts",PostSchema)