const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: 'help1',
  execute(client, message, args, Discord, cmd) {  

    const Embed = new Discord.MessageEmbed()
    .setColor('#735BC1')
    .setTitle('Help Menu')
    .setDescription('These are all my commands <a:bongocat:853223037636837386> \n ')
    .addField(':frog:  help-fun',  '`These are all the commands for the fun area 🎉`', true)
    .addField(':wrench:  help-mod',  '`These are all the commands for the team 👮🏾`', true)
    .addField(':underage:  help-nsfw',  '`These are all the commands for the NSFW area 🔞`', true)
    .addField(':performing_arts:  help-canvas',  '`These are all the commands for the canva area 🎭`', true)
    .addField(':musical_note:  help-music',  '`These are all the commands for the music area 🎶`', true)
    .addField(':ticket:  help-sup',  '`These are all commands for the support area 🎫`', true)
    .setImage('https://cdn.discordapp.com/attachments/842859273834463233/853727605382840360/bongo-cat-banner.png');
    message.channel.send(Embed)
}};