var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, '/')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/signup', function(req, res){
  res.sendFile(path.join(__dirname, 'signup.html'));
});
app.get('/login', function(req, res){
  res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/profile', function(req, res){
  res.sendFile(path.join(__dirname, 'profile.html'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});