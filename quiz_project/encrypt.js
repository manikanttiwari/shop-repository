function doEncryption(userObject,response){
    var bcrypt = require('bcrypt');
    const userOperation = require("./db/crud/user/usercrud");
    const saltRounds = 10;
    var password = userObject.password;
    var userid = userObject.userid;
    console.log("Register ",userid);
    console.log("Register ",password);
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, encryptedPassword) {
            var newUserObject = {
                userid : userObject.userid,
                    password : encryptedPassword
            }
            userOperation.register(newUserObject,response);
            
        });
    });
    }
    module.exports = doEncryption;