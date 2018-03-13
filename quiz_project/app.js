const express = require("express");
const app = express();
// const app = express();const cookieParser = require('cookie-parser');
// const session = require('express-session')
var bodyParser = require('body-parser');
app.use(express.static("public"));
const userRoutes = require("./routes/userroutes");

// var bcrypt = require('bcrypt');
// const doEncryption = require("./encrypt");
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
// app.get('/error', (req, res) => res.send("error logging in"));

var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',userRoutes);
app.listen(12345,()=>{
    console.log("Server Start...");
});