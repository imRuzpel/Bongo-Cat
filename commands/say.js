const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: "say",
  execute(client, message, args, Discord, cmd) {  

    const sayEmbed = new Discord.MessageEmbed()
        .setDescription(args.join(" "))
        .setColor("#735BC1");

    message.channel.send(sayEmbed)
}};