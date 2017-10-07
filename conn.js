/*>>> load dependencies <<<*/
const express = require('express');
const bodyParser= require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

/*>>> setup mongo model <<<*/
mongoose.Promise = global.Promise;
const accountSchema = new mongoose.Schema({
	password: 'string',	
	username: 'string'
});
const uri = "mongodb://mlab123:1234@ds161584.mlab.com:61584/stqa";
// const uri = process.env.DB_URI;
const options = {
	useMongoClient: true,
	promiseLibrary: require('bluebird'),
};
const db = mongoose.createConnection(uri, options);
const Accounts = db.model('accounts', accountSchema);

/*>>> setup template view engine <<<*/
app.set('view engine', 'ejs');

/*>>> using express middlewares <<<*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());

/*>>> defining routes <<<*/
app.get('/', (req,res)=>{
	const callback = (err,result) => {
		if(err)throw err;
		res.render('login.ejs', {accounts: result});		
	};
	Accounts.find(callback);
	// res.sendFile(__dirname + '/index.html');
});

app.post('/login',(req,res)=> {
	user = Accounts.find({"username": req.body.username});
	pass = Accounts.find({"password": req.body.password});

	if(user && pass){
		res.render('profile.ejs',{accounts: result});
	}
});

app.post('/accounts', (req, res) => {
	const newAccount = {
		"password": req.body.password,
		"username": req.body.username
	};
	const callback = (err, data)=>{
		if(err)throw err;
		console.log('saved to database');
		res.redirect('/profile',{username: req.body.username, password: req.body.password});
	};
	Accounts.create(newAccount, callback);
});

app.get('/signup',(req,res)=>{
	res.render('signup.ejs');
});

app.get('/profile',(req,res)=>{
	console.log(req);
	const callback = (err,result) => {
		if(err)throw err;
		res.render('profile.ejs', {accounts: result});		
	};
	Accounts.find(callback);
})

app.put('/accounts', (req, res) => {
	const query = {
		userid: req.body.userid
	};
	
	const update = {
		$set: {
			username: req.body.username,
			password: req.body.password
		}
	};
	const options = {
		sort: {_id: -1},
		upsert: false
	};
	const callback = (err, result) => {
		if (err) return res.send(err);
		res.send(result);
	};

	Accounts.updateOne(query, update, options, callback);
	// Students.findOneAndUpdate(query, update, options, callback);
});

app.delete('/accounts', (req, res) => {
	const query = {
		userid: req.body.userid
	};
	const callback = (err, result) => {
		if (err) return res.send(500, err);
		res.send({message: req.body.userid + ' got deleted.'});
	};

	Accounts.deleteOne(query, callback);
});

/*>>> run server and assign port <<<*/
app.set('port',(process.env.PORT || 3000));
app.listen(app.get('port'),()=>{
	console.log('listening on ', app.get('port'));
});