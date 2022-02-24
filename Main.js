const express = require('express');
const app = express();
const port = 3000;
var pizza = 0;
var fs = require('fs')
var logger = fs.createWriteStream('log.txt', {encoding:'utf8',flags:'a'});
const cusswords = ["fuck","shit", "cunt" ,"whore", "hoe", "bitch", "cock", "dick", "damm", "damn", "sex", "pervert", "bastard", "niggra"];
const words = ["mayonnaise","bubble","piss","macaroni and cheese","technoblade","peppa pig"," fortnite","potato"]
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const hate = ["i hate techno"]
client.on("ready", () => {
  app.listen(port, () => console.log("\x1b[32m",`Bot is online`));
	console.log("\x1b[32m",`Logged in as ${client.user.tag}!`,"\x1b[0m")
app.get('/', (req, res) => res.send('The bot is online!'));
})
const prefix = '';
console.log("\x1b[0m")
console.log("\x1b[0m","\n")
client.on("messageCreate", msg => {
if (msg.author.bot) return false;
function isAdmin(msg) {
  return msg.member.permissionsIn(msg.channel).has("ADMINISTRATOR")
}
const args = msg.content.trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
msg.content = msg.content.toLowerCase();
	  if (msg.content === 'ping') {
    msg.reply('pong!');
		console.log("Command ping was run")
		
  }
		if (msg.content === "tomato bot?") {
  	console.log("Command tomato bot? was run")
    msg.reply(`Yes?`);         
  } 
	if (msg.content == "praise") { 
		console.log("Command praise was run")
    msg.channel.send(`Praise the tomato and all the holy power that it holds`);
  } 
	if (msg.content == "what is my fortune") { 
		console.log("Command fortune was run")
    var fortune = Math.floor(Math.random() * 6);
		switch(fortune){
			case 1:
    		msg.reply(`Your fortune is that you will eat a tomato (witch is cannibalism 😱😱) `);
    break;
  		case 2:
    		msg.reply(`Your fortune is that You were a tomato in your past life`);
    break;
			case 3:
    		msg.reply(`Your fortune is ... 🍅?`);
    break;
			case 4:
    		msg.reply(`idk`);
    break;
			case 5:
    		msg.reply(`idk`);
    break;
  default:
		msg.reply(`You are cursed by the dreded potato virus`);
    }
  }

if (msg.content == "whats the meaning of life?") {
	console.log("Command meaning of life was run")
  msg.reply(" all living organismes exist to plant tomatoes, and tomatoes exist to be epic and pogers");
}
if (msg.content == "tomato gods?") {
	console.log("Command tomato gods was run")
  msg.reply("how dare you interrupt the busy tomato gods!");

}
if (msg.content == "i hate tomatoes") {
	console.log("Command i hate tomatos was run")
  msg.reply("@Top tomato tomato hater located ban immediately!");
}
			if (msg.content == "tell me a joke") { 
		console.log("Command joke was run")
    var joke = Math.floor(Math.random() * 6);
		switch(joke){
			case 1:
    		msg.reply(`Q: What did the papa tomato say to the baby tomato?
A: ||“Hurry and ketchup!”||`);
    break;
  		case 2:
    		msg.reply(`Q. Why did the tomato blush?
A. ||Because he saw the salad dressing.||`);
    break;
			case 3:
    		msg.reply(`Q. What’s the difference between knowledge and wisdom?
A. ||Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.||`);
    break;
			case 4:
    		msg.reply(`Q: What is red and goes up and down?
A: ||A tomato in an elevator.||`);
    break;
			case 5:
    		msg.reply(`Q: How do you fix a sliced tomato?
A: ||Use tomato paste.||`);
    break;
  default:
		msg.reply(`I don't have joke sorry`);
    }
			}
		  if (msg.content === 'is anyone on') {
    msg.reply('I am');
		console.log("Command anyone on? was run")
		
			}
	if (msg.content == "help"){
		const help = new MessageEmbed()
		.setColor("#ff4800")
	.setTitle('Bot commands')
		.addFields(
		{ name: 'Ping', value: 'The most simple command responds with "Pong!"'},
		{ name: 'Tomato Bot?', value: 'Responds with "Yes?"'},
		{ name: 'Praise', value: 'Responds with "Praise the tomato and all..."'},
		{ name: 'What is my fortune', value: 'Responds with a random tomato related fortune'},
		{ name: 'What is the meaning of life?', value: 'responds with all living organismes exist to pl...'},
		{ name: 'Tomato Gods?', value: 'Responds with "how dare you interrupt the busy tomato gods!"'},
		{ name: 'I hate tomatos', value: 'Responds with "@Top tomato tomato hater located ban immediately!"'},
		{ name: 'Tell me a joke', value: 'Responds with a random tomato related joke'}
	)

msg.author.send({ embeds: [help] });
msg.reply("The list of bot commands has been sent you you via dm")
console.log('Command help was run')
	}
	if (cusswords.some(word => msg.content.includes(word))) {
    msg.delete();
		console.log( msg.author.tag,"sent deleted message: ",msg.content,)
		msg.channel.send(` watch your language ${msg.author}`).then(msg =>{
setTimeout(() => msg.delete(), 2000)
  }).catch()
	
		
};
if (cmd == 'args-info') {
		if (!args.length) {
			return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
		}
		msg.channel.send(`Command name: ${msg}\nArguments: ${args}`);
}

if (cmd === "~send" && isAdmin(msg)) {
	
	msg.delete()
  let fullArgs = args.slice(0).join(' ');
  if (fullArgs, msg) { //check if the args are existing
  	msg.channel.send(fullArgs).catch(console.error);
		//send the value of the args
		console.log("Custom mesaage sent: ",fullArgs)
  }
}
if (msg.content === "~kick" && isAdmin(msg)) {
	msg.delete()
let member = msg.mentions.members.first();
if(!member) return msg.reply("Please mention a valid member of this server");
if(!member.kickable) return msg.reply("I cannot kick this member!");

member.kick();
  
}
if (msg.content == "~help" && isAdmin(msg)){
	msg.delete()
		const help_a = new MessageEmbed()
		.setColor("#ff4800")
	.setTitle('Advanced Command List')
		.addFields(
		{ name: 'Ping', value: 'The most simple command responds with "Pong!"'},
		{ name: 'Tomato Bot?', value: 'Responds with "Yes?"'},
		{ name: 'Praise', value: 'Responds with "Praise the tomato and all..."'},
		{ name: 'What is my fortune', value: 'Responds with a random tomato related fortune'},
		{ name: 'What is the meaning of life?', value: 'responds with all living organismes exist to pl...'},
		{ name: 'Tomato Gods?', value: 'Responds with "how dare you interrupt the busy tomato gods!"'},
		{ name: 'I hate tomatos', value: 'Responds with "@Top tomato tomato hater located ban immediately!"'},
		{ name: 'Tell me a joke', value: 'Responds with a random tomato related joke'},
		{ name: '~send', value: 'sends a custom message from tomato bot'},
		{ name: '~kick', value: 'kicks the @mentioned user'}
	)
		

msg.author.send({ embeds: [help_a] });
console.log('Command help advanced was run')
	}
if (cmd === "roll"){
  let args1 = args[0];
  if (args1) { //check if the args are existing
  	var diceNum = Math.floor(Math.random() * args1);
		msg.channel.send(`rolled number: ${diceNum}`);
  }

}
if (msg.content === "i got pizza") {
  console.log("pizza ran");
  msg.channel.send("does it have tomato sauce?");
  pizza = 1
  console.log(Boolean(pizza))
  console.log(pizza)
}
if (msg.content === "yes") {
  console.log("yes recieved")
  console.log(Boolean(pizza))
  console.log(pizza)
  if (Boolean(pizza)) {
    msg.reply("NOOOO! UNCLE GEORGE!!!!")
		pizza = 0;
  }
}
if (msg.content === "no") {
  if (Boolean(pizza)) {
    msg.reply("oh good. *takes slice*")
		pizza = 0;
  }}

if (words.some(word => msg.content.includes(word))) {
		msg.channel.send(`Potental bad tomato Top tomatos plz review mesage from ${msg.author}`)
  }
if (msg){
		var msgc = `${msg.author.username} said "${msg.content}"`;
			logger.write(msgc+"\n")
	}
if (msg.content == "delete log" ){
	if (isAdmin(msg)){
		msg.channel.send('log file content deleted')
	fs.writeFile('log.txt', '', function(){})}else{
		msg.reply("You can not do that")
	}
}
	if (msg.mentions.has(client.user.id)) {
        msg.channel.send("Hello there!");
    }
if (hate.some(word => msg.content.includes(word))) {
		msg.channel.send(`I agree`)
  }
if (cmd === "~announcement" && isAdmin(msg)) {
	
	msg.delete()
  let fullArgs = args.slice(0).join(' ');
  if (fullArgs, msg) { 
  	msg.channel.send(`Attention all <@&938629786564186142> ${fullArgs}`).catch(console.error);
		console.log("announcement made: ",fullArgs)
  }
}
/*if (msg.content = "play game"){
	game();
}
function game(){
	const game = new MessageEmbed()
.setTitle("Interactive game")
.setDescription("Anyone on this channel can participate and during the game you can only play the game and you cant send normal messages ")
		.addFields(
		{ name: 'Rules', value: 'nothing because this is a test no real interactive game here'},{ name:"Po you want to play?" ,value:"With this info in mind are you sure you want to continiue YES/no"})
	msg.channel.send(game)
}*/
});

client.login(process.env.BOT_TOKEN)
