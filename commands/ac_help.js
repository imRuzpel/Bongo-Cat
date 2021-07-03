module.exports = {
  name: 'ac-help',
  execute(client, message, args, Discord, cmd) {  
    if(message.author.id !== `852948872691318785`) return message.channel.send('You dont have permissions!')

    const sayEmbed = new Discord.MessageEmbed()
        .setTitle('Activity help')
        .setDescription('**You can Use**\n \n`listening` Hearing to <nothing>\n`streaming` streaming <nothing>\n`watching` watching <nothing>\n`competing` competing in <nothing>\n`playing` playing <nothing>\n`reset` Hört dir zu!')
        .setColor("#735BC1")
        .setImage('https://cdn.discordapp.com/attachments/852956567900520509/853216778880679967/bongo-cat.png');

    message.channel.send(sayEmbed)
}};