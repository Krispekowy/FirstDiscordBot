require('dotenv').config();

// Require the necessary discord.js classes
const { Client, Intents, Collection  } = require('discord.js');
const { token } = require('G:\\Microsoft VS Code\\FirstDiscordBot\\config.json');

const { MessageEmbed } = require('discord.js');

const prefix = "!";
const fs = require('fs');

var XMLHttpRequest = require('xhr2');
const Http = new XMLHttpRequest();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS], });

client.comands = new Collection();

const commandFiles = fs.readdirSync('G:\\Microsoft VS Code\\FirstDiscordBot\\commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`G:\\Microsoft VS Code\\FirstDiscordBot\\commands\\${file}`);
    client.comands.set(command.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping'){
        client.comands.get('ping').execute(message,args, message.author);
    } else if(command === 'heniu'){
        client.comands.get('youtube').execute(message,args);
    } else if(command === 'embed'){
        client.comands.get('embed').execute(message,args, MessageEmbed);
    }
})


// client.on('message', (message) => {
//     console.log(`[${client.user.tag}]: ${message.content}`);
//     const api = `https://eun1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${message}?api_key=RGAPI-d3721634-8526-436f-bfc7-aea95ae4ddb7`;
//     Http.open("GET", api);
//     Http.send();
//     let chunks = [];
//     Http.on('data', function(data){
//         chunks.push(data);
//     }).on('end', function(){
//         let data = Buffer.concat(chunks);
//         let schema = JSON.parse(data);
//         console.log(schema.id);
//     })
// });

// Login to Discord with your client's token
client.login(token);