const express = require('express')
const router = express.Router();

const signUpAuth = require('../controller/signupauth');
const loginAuth = require('../controller/loginauth')
const postUserData = require('../controller/userdata');
const createpost = require('../controller/addpost');

router.post('/register',signUpAuth, postUserData)

router.post('/login',loginAuth)

router.post('/createpost',createpost)

router.get('/',(req,res)=>{
    res.send("Welcome to Base Page")
})



module.exports = router;


