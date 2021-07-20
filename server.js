const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 4000

const users = require("./routes/userRoute")
const posts = require("./routes/postRoute")
//database connection
require("./config/db")


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//jwt secret token
app.set('secretKey', 'nodeRestApi')

//api endpoints
app.use("/users",users)
app.use("/posts",validateUser,posts)



function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
  
}

//health check url
app.get("/",(req,res) => {
  res.send("health check ok")
})

//server running on port
app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})