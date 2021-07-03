const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: 'help-canvas',
  execute(client, message, args, Discord, cmd) {  

    const Embed = new Discord.MessageEmbed()
    .setColor('#735BC1')
    .setTitle('Help Menu')
    .setDescription('These are all my Moderation commands <a:bongocat:853223037636837386> \n ')
    .addField('bongo',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('amongus',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('trash',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('jail',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('hitler',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('toilet',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('rip',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('trigger',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('gay',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('bongo',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('bongo',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('bongo',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('bongo',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('bongo',  '`These are a command who can ban users from the server 🗑️`', true)
    .addField('bongo',  '`These are a command who can ban users from the server 🗑️`', true)
    .setImage('https://cdn.discordapp.com/attachments/842859273834463233/853727605382840360/bongo-cat-banner.png');
    message.channel.send(Embed)
}};