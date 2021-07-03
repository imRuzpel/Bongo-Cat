const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: 'help-nsfw',
  execute(client, message, args, Discord, cmd) {  

    const Embed = new Discord.MessageEmbed()
    .setColor('#735BC1')
    .setTitle('Help Menu')
    .setDescription('These are all my nsfw commands <a:bongocat:853223037636837386> \n ')
    .addField('Comming soon...')
    .setImage('https://cdn.discordapp.com/attachments/842859273834463233/853727605382840360/bongo-cat-banner.png');
    message.channel.send(Embed)
}};