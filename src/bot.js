require('dotenv').config();

// Require the necessary discord.js classes
const { Client, Intents, Collection, MessageEmbed  } = require('discord.js');
const { token } = require('G:\\Microsoft VS Code\\FirstDiscordBot\\config.json');

const prefix = "!";
const fs = require('fs');

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

// Login to Discord with your client's token
client.login(token);