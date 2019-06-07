const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
var http = require('http');
var url = require('url');
app.set('view engine', 'ejs');
const ReadLine = require('readline');
const Riverscript = require('rivescript');
const Steeve = new Riverscript();
const Eude = new Riverscript();
const Hubert = new Riverscript();
const Yann = new Riverscript();
const Adam = new Riverscript();
const rl = ReadLine.createInterface({ input: process.stdin, output: process.stdout })

Steeve.loadFile('./Steeve.rive').then(brainRdySteeve).catch(brainErr);
Eude.loadFile('./Eude.rive').then(brainRdyEude).catch(brainErr);
Hubert.loadFile('./Hubert1.rive').then(brainRdyHubert).catch(brainErr);
Yann.loadFile('./Yann.rive').then(brainRdyYann).catch(brainErr);
Adam.loadFile('./Adam.rive').then(brainRdyAdam).catch(brainErr);

function brainRdySteeve() { 
	Steeve.sortReplies();
	askSteeve(); 
}

function brainErr () { 
	//console.log('Error reading file ' + error);
}

function askSteeve(){
	rl.question((message)=> {
		Steeve.reply('local-user',message);
	});
}

function brainRdyEude() { 
	Eude.sortReplies(); 
	askEude(); 
}
function askEude(){
	rl.question((message)=> {
		Eude.reply('local-user',message);
	});
}

function brainRdyHubert() { 
	Hubert.sortReplies(); 
	askHubert(); 
}
function askHubert(){
	rl.question((message)=> {
		Hubert.reply('local-user',message);
	});
}

function brainRdyYann() { 
	Yann.sortReplies(); 
	askYann(); 
}
function askYann(){
	rl.question((message)=> {
		Yann.reply('local-user',message);
	});
}

function brainRdyAdam() { 
	Adam.sortReplies(); 
	askAdam(); 
}
function askAdam(){
	rl.question((message)=> {
		Adam.reply('local-user',message);
	});
}


var msg1 = {"id": "1", 
			"contenu": "Salut",
		    "statut": "Envoyé",
			};

var msg2 = {"id": "2", 
			"contenu": "Bonjour",
		    "statut": "Envoyé",
			};

var convSteeve = [];
var convEude = [];
var convHubert = [];
var convYann = [];
var convAdam = [];


//accueil, choix du bot avec lequel le client souhaite converser
app.get('/', function (req, res) {
	res.render('accueil', {title: 'Bienvenue'});
})
 
app.post('/', function (req, res) {
	res.render('accueil', {title: 'Bienvenue'});
})



//Steeve le bot de couleur magenta
app.get('/Steeve', function (req, res) {
	res.render('Steeve', {title: 'Steeve le chatbot', convo: convSteeve});
})

app.post('/Steeve', function (req, res) {
	var bouton1 = req.body.bouton1;
	var bouton2 = req.body.bouton2;
	var message = req.body.msg;
	if(bouton1 == 'Envoyer'){
		if(convSteeve.length >= 21){
			convSteeve.shift();
			convSteeve.shift();
		}
		convSteeve.push(message);
		Steeve.reply('local-user', message).then( function (reply) {convSteeve.push(reply)});
		res.render('Steeve', {title: 'Steeve le chatbot', convo: convSteeve});
	}
	if(bouton2 == 'Reponse'){
		res.render('Steeve', {title: 'Steeve le chatbot', convo: convSteeve});
	}
	else{
		res.render('Steeve', {title: 'Steeve le chatbot', convo: convSteeve});
	}
})



//Eude le bot de couleur bleue
app.get('/Eude', function (req, res) {
	res.render('Eude', {title: 'Eude le chatbot', convo: convEude});
})

app.post('/Eude', function (req, res) {
	var bouton1 = req.body.bouton1;
	var bouton2 = req.body.bouton2;
	var message = req.body.msg;
	if(bouton1 == 'Envoyer'){
		if(convEude.length >= 21){
			convEude.shift();
			convEude.shift();
		}
		convEude.push(message);
		Eude.reply('local-user', message).then( function (reply) {convEude.push(reply)});
		res.render('Eude', {title: 'Eude le chatbot', convo: convEude});
	}
	if(bouton2 == 'Reponse'){
		res.render('Eude', {title: 'Eude le chatbot', convo: convEude});
	}
	else{
		res.render('Eude', {title: 'Eude le chatbot', convo: convEude});
	}
})


//Hubert le bot de couleur rouge
app.get('/Hubert', function (req, res) {
	res.render('Hubert', {title: 'Hubert le chatbot', convo: convHubert});
})

app.post('/Hubert', function (req, res) {
	var bouton1 = req.body.bouton1;
	var bouton2 = req.body.bouton2;
	var message = req.body.msg;
	if(bouton1 == 'Envoyer'){
		if(convHubert.length >= 21){
			convHubert.shift();
			convHubert.shift();
		}
		convHubert.push(message);
		Hubert.reply('local-user', message).then( function (reply) {convHubert.push(reply)});
		res.render('Hubert', {title: 'Hubert le chatbot', convo: convHubert});
	}
	if(bouton2 == 'Reponse'){
		res.render('Hubert', {title: 'Hubert le chatbot', convo: convHubert});
	}
	else{
		res.render('Hubert', {title: 'Hubert le chatbot', convo: convHubert});
	}
})



//Yann le bot de couleur noire
app.get('/Yann', function (req, res) {
	res.render('Yann', {title: 'Yann le chatbot', convo: convYann});
})

app.post('/Yann', function (req, res) {
	var bouton1 = req.body.bouton1;
	var bouton2 = req.body.bouton2;
	var message = req.body.msg;
	if(bouton1 == 'Envoyer'){
		if(convYann.length >= 21){
			convYann.shift();
			convYann.shift();
		}
		convYann.push(message);
		Yann.reply('local-user', message).then( function (reply) {convYann.push(reply)});
		res.render('Yann', {title: 'Yann le chatbot', convo: convYann});
	}
	if(bouton2 == 'Reponse'){
		res.render('Yann', {title: 'Yann le chatbot', convo: convYann});
	}
	else{
		res.render('Yann', {title: 'Yann le chatbot', convo: convYann});
	}
})

//Eude le bot de couleur verte
app.get('/Adam', function (req, res) {
	res.render('Adam', {title: 'Adam le chatbot', convo: convEude});
})

app.post('/Adam', function (req, res) {
	var bouton1 = req.body.bouton1;
	var bouton2 = req.body.bouton2;
	var message = req.body.msg;
	if(bouton1 == 'Envoyer'){
		if(convAdam.length >= 21){
			convAdam.shift();
			convAdam.shift();
		}
		convAdam.push(message);
		Adam.reply('local-user', message).then( function (reply) {convAdam.push(reply)});
		res.render('Adam', {title: 'Adam le chatbot', convo: convAdam});
	}
	if(bouton2 == 'Reponse'){
		res.render('Adam', {title: 'Adam le chatbot', convo: convAdam});
	}
	else{
		res.render('Adam', {title: 'Adam le chatbot', convo: convAdam});
	}
})



app.listen(8080);


