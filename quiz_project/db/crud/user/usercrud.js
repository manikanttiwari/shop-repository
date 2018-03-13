var User = require("../../schema/user/userschema");

var bcrypt = require('bcrypt');

const userOperation={

    login(userObject,response){
      var   username=userObject.userid;
      var   psw = userObject.password;
         console.log(userObject);
console.log("in login method useranem "+ username);
console.log("in login method passwrod"+ psw)
              User.find({ userid:username}, function (err, user) {
             console.log("user's whole object is: "+user);
              console.log(username);
              console.log("password"+psw);
                if (err) {
                    
                     return done(err); }
                if (!user) {
                    
                  return done(null, false, { message: 'no user found' });
                  
                }
                if(user){

                    console.log("user's true password is: "+user[0].password);
                    console.log("password"+psw);
                bcrypt.compare(psw, user[0].password, function(err, res) {
                    
                    if (err){
                    throw err;}
                    if(!res) {

                      console.log('Ooops!. Wrong Pass!');
                      return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
                    }
                    if(res){
                        // request.session.userid = request.body.form_username;
                        // request.sesssion.password = request.body.form_password;
                   // response.send("Login Done");
                //   
                response.redirect('dashboard');
                    }
                  });
                }
              });
            },
           
         
//         User.find({userid:userid},function(err, docs){
//             if(err){
//                 response.send('Error in Login');
//             }
//             if(docs){
//                 if(docs.length>0){
//                     response.send('Login Done');
                    
//                 }
//                 else{
//                     response.send('Invalid Userid or Password');
//                 }
//             }
//         });
//    },


    register(userObject,response){
        console.log("Inside Register.....",userObject);
        User.create(userObject,function(err){
            if(err){
                response.send("Can't Register Error");
                console.log("Error is ",err);
            }
            else{
                //console.log("Register ",request.User);
                response.send("Register Done"+userObject);
            }
        });
    }

    // insert(userObject,response){
    //      var id = userObject.userid;
    // }
}



module.exports = userOperation;