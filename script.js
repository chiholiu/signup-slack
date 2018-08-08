var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var port = Number(process.env.PORT || 3000);

mongoose.Promise = global.Promise;
mongoURI = 'mongodb://localhost:27017/email';
mongoose.connect(process.env.MONGODB_URI || mongoURI);

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname, + '/app'));

var Schema = new mongoose.Schema({
	name: String,
	email: String
});

var user = mongoose.model('Users', Schema);

app.get('/')

app.post('/data', function(req, res) {
	new user({
		name: req.body.name,
		email: req.body.email
	}).save(function(err, doc) {
		if(err) res.json(err);
		else res.send('Successfully signed up!, you will get an invitation within a couple of days. frontenddudes@gmail.com');
	});
});

// app.get('/returning-values',  function(req, res) {
//     dbConn.then(function(db) {
//         db.collection('emails').find({}).toArray().then(function(feedbacks) {
//             res.status(200).json(feedbacks);
//         });
//     });
// });

app.listen(port);