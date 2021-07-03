const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: 'help-mod',
  execute(client, message, args, Discord, cmd) {  

    const Embed = new Discord.MessageEmbed()
    .setColor('#735BC1')
    .setTitle('Help Menu')
    .setDescription('These are all my Moderation commands <a:bongocat:853223037636837386> \n ')
    .addField('🗑️  ban',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('🧹 clear',  '`These are a command who can clear msgs from the server 🧹`', true)
    .addField('🛡️  kick',  '`These are a command who can kick users from the server 🛡️`', true)
    .addField('🔇  mute',  '`These are a command who can mute users of the server ⛔`', true)
    .addField('🐞  steal',  '`These are a command who can steal other emotes 💎`', true)
    .addField('<a:discordblob:854336218241433651>  unmute', '`These are a command who can unmute users 🔓`', true)
    .setImage('https://cdn.discordapp.com/attachments/842859273834463233/853727605382840360/bongo-cat-banner.png');
    message.channel.send(Embed)
}};