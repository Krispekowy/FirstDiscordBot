module.exports = {
    name: 'youtube',
    description: "this is a youtube link!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/watch?v=p1_RdIuCXnI');
    }
}