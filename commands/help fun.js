const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: 'help-fun',
  execute(client, message, args, Discord, cmd) {  

    const Embed = new Discord.MessageEmbed()
    .setColor('#735BC1')
    .setTitle('Help Menu')
    .setDescription('These are all my fun commands <a:bongocat:853223037636837386> \n ')
    .addField('🎱  8ball',  '`These are a Random 8ball command lol its true wtf 🎱`', true)
    .addField('<a:bongocat:853223037636837386>  bongo-cat',  '`These are a command for the Bongo Cat area QwQ 🐱`', true)
    .addField('🐧  cute',  '`These are a command for the animals area awww 🐧`', true)
    .addField('🏳️‍🌈  howgay',  '`These are a command for the random number area öhm 🏳️‍🌈`', true)
    .addField('🔢  tictactoe',  '`These are a command for the games area Good Game 🔢`', true)
    .addField('☁️  weather', '`These are a command for the weather area lol ☁️`', true)
    .addField('🐸  meme', '`These are a command for the memes area xDD wtf 🐸`', true)
    .addField('🖼️  image', '`These are a command for the media area haha whats that 🖼️`', true)
    .addField('🧠  iq', '`These are a command for the random number area lol 🧠`', true)
    .setImage('https://cdn.discordapp.com/attachments/842859273834463233/853727605382840360/bongo-cat-banner.png');
    message.channel.send(Embed)
}};