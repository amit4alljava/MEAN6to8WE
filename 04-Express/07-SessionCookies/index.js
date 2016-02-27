var express      = require('express')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session'); //npm install cookie-session --save
/*This module provides "guest" sessions, meaning any visitor will have a session, authenticated or not.
If a session is new a Set-Cookie will be produced regardless of populating the session.*/
var session = require('express-session'); //npm install express-session --save
//http://www.javabeat.net/expressjs-session-management/
/*
 Basically, express-session is more abstract, it supports different session stores (like files, DB, cache and whatnot).

 And cookie-session is a simple / lightweight cookie-based (cookie is the only storage engine supported: all the session info is stored on the client, in a cookie) session implementation
 */
var app = express()
app.use(cookieParser())
app.use(session({secret: 'ssshhhhh'}));
app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
})

var sess;
app.get('/',function(req,res){
    sess=req.session;
    /*
     * Here we have assign the 'session' to 'sess'.
     * Now we can create any number of session variable we want.
     * in PHP we do as $_SESSION['var name'].
     * Here we do like this.
     */
    sess.email; // equivalent to $_SESSION['email'] in PHP.
    sess.username; // equivalent to $_SESSION['username'] in PHP.
});
res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });

app.listen(1234);