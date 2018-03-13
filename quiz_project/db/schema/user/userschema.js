var mongoose = require("../../connection");
var Schema = mongoose.Schema;
var userSchema = new Schema({userid:String,
                             password:String                            
                            });
var User = mongoose.model("onlineusers",userSchema);
module.exports = User;