module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, user){
        message.channel.send(`pong! ${user}`);
    }
}