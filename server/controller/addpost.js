const jwt = require("jsonwebtoken")
const PostData = require("../models/posts")
const UserData = require('../models/registeredUser');

const createpost= async (req,res)=>{
    const {username,caption,img} = req.body;
    try{
        const {email} = jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
        UserData.find({email:email}).then((userdata)=>{
         if(userdata.length){
            
             PostData.create({email:userdata[0].email,username:username,caption:caption,img:img}).then((post)=>{
                res.json({message:'post created successfully!!!'})
             })
         }else{
             res.json({error:"unauthorized User"})
         }
        }) 
    }
    catch(err){
        res.json({error:"failed!"})
    }
  
}

module.exports = createpost;