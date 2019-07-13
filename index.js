const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () =>
{
	console.log('Ready!')
});

client.login(config.token);

const sass = [
	'*The Gerb has spoken.*',
	'Long live the Gerbeard!',
	'All hail the Gerbmeister!',
	'Insurance anyone?',
	'How\'d you like some mashed peas?!',
	'I live to serve the Gerb.',
	'**Mind the Gerbeard**',
	':musical_note:*He\'s just a Gerbeard from a poor family!*:musical_note:',
	'The Gerb abides.',
	'Gerbeard made a hankey :hankey:'
]

const backTalk = [
	'*Up your nose with a rubber hose!*',
    '**I know you are!**',
    '*You kiss your momma with that mouth?*',
    '*I\'m rubber you\'re glue*',
    '*You mean <@379746794193551360>?*',
    '*If I had a nickle for every time I heard that!*',
    '*Butt ape!*',
    '*:hankey: face!*',
    '*Cheeky fu&#er!!!*',
    '*Come on, say that again, you...*'
];

client.on('message', message =>
{
	if (message.content === 'Bing')
	{
		message.channel.send('Bang Boom!');
	}
	else if (message.content === 'Assmonkey!')
	{
		message.channel.send(backTalk[Math.floor(Math.random() * backTalk.length)]);
	}
	else if (message.author.id === '379746794193551360')
	{
		message.channel.send(sass[Math.floor(Math.random() * sass.length)]);
	}
})
