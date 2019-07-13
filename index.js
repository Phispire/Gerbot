const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {console.log('Ready!')});

client.login(config.token);

const sass = ['*The Gerb has spoken.*','Long live the Gerbeard!', 'All hail the Gerbmeister!','Insurance anyone?','How\'d you like some mashed peas?!','I live to serve the Gerb.']
sass[6]='**Mind the Gerbeard**';
sass[7]=':musical_note:*He\'s just a Gerbeard from a poor family!*:musical_note:';
sass[8]='The Gerb abides.';
sass[9]='Gerbeard made a hankey :hankey:';

const backTalk = ['*Up your nose with a rubber hose!*'];
backTalk[1]='**I know you are!**';
backTalk[2]='*You kiss your momma with that mouth?*';
backTalk[3]='*I\'m rubber you\'re glue*';
backTalk[4]='*You mean <@379746794193551360>?*';
backTalk[5]='*If I had a nickle for every time I heard that!*';
backTalk[6]='*Butt ape!*';
backTalk[7]='*:hankey: face!*';
backTalk[8]='*Cheeky fu&#er!!!*';
backTalk[9]='*Come on, say that again, you...*';


client.on('message', message => {
    if (message.content === 'Bing'){
        message.channel.send('Bang Boom!');
    } else if (message.content === 'Assmonkey!'){
        message.channel.send(backTalk[Math.floor(Math.random()*9)]);
    } else if (message.author.id === '379746794193551360'){
        message.channel.send(sass[Math.floor(Math.random()*9)]); 
    }
})