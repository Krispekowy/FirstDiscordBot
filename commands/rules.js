module.exports = {
    name: 'embed',
    description: "Embeds!",
    execute(message, args, MessageEmbed){
        const exampleEmbed = new MessageEmbed()
            .setColor('#304281')
            .setTitle('Rules')
            .setURL('https://www.youtube.com/watch?v=p1_RdIuCXnI')
            .setDescription('To jest embed z zasadami serwera')
            .addFields(
                {name: 'Zasada 1', value: 'Bądź uprzejmy'},
                {name: 'Zasada 2', value: 'Obserwuj Twitch'},
                {name: 'Zasada 3', value: 'Nie wrzucaj memów'}
            )
            .setImage('https://st2.depositphotos.com/1561359/5271/v/600/depositphotos_52713147-stock-illustration-rules-word-written-by-3d.jpg')
            .setFooter('Upewnij się, że zapoznałeś się z zasadami');
        message.channel.send({ embeds: [exampleEmbed] });
    }
}