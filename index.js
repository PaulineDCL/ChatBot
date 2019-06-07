const ReadLine = require('readline');
const Chalk = require('chalk');
const Riverscript = require('rivescript');
const bot = new Riverscript();
const rl = ReadLine.createInterface({ input: process.stdin, output: process.stdout })


bot.loadFile('./bot.rive').then(brainRdy).catch(brainErr);


function brainRdy() { 
	console.log('Succesful reading');
	bot.sortReplies(); ask(); 
}

function brainErr () { 
	console.log('Error reading file ' + error);
}

function ask(){
	rl.question('You : ',(message)=> {
		bot.reply('localhost',message).then( function (reply) { console.log(Chalk.green('Bot : '+ reply)); ask();});
	});
}




