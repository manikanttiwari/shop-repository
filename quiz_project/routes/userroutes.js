const express = require("express");
var router = express.Router(); 
const app = express();
const User = require("../models/users/user");
const userOperation = require("../db/crud/user/usercrud");


// router.post('/login', passport.authenticate('LocalStrategy', {
//     successRedirect: '/home',
//     failureRedirect: '/',
//     failureFlash : true 
//   }));


router.post('/login',(request,response)=>{
  //  console.log(request.body.form_username);//lucky
  //  console.log(request.body.form_password)//mani
    var userid = request.body.form_username;
    var password= request.body.form_password;
    console.log("userid "+userid);
    var userObject  = new User(userid,password);
    userOperation.login(userObject,response);
});
    
    



router.post('/register',(req,response)=>{
    console.log("Register Call");
    var userid = req.body.email;
                  var  password = req.body.psw;
                var userObject  = new User(userid,password);
                  const doEncryption = require("../encrypt.js");
                  doEncryption(userObject,response);

});

router.post('/dashboard',(req,response)=>{
  if(req){

    console.log("dashboard called");
  }
});

// router.post('/',(request,response)=>{
//     if(request.session.userObject){
//         response.redirect('/logged');
//     }
//     else{
//         res.render('index.html');
//     }
// });


// router.post('/insertQuestion',(request,response)=>{
//     var qstn = request.body.question;
//     var opt1 = request.body.opt1;
//     var opt2 = request.body.opt2;
//     var opt3 = request.body.opt3;
//     var opt4 = request.body.opt4;
//     var ans = request.body.ans;
//     var userid = request.body.id;
//     var userObject = new Insert(qstn,opt1,opt2,opt3,opt4,ans,userid);
//     userOperation.Insert(userObject,response);
    
// })
module.exports = router;