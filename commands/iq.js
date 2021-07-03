const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'iq',
  async execute(client, message, args, Discord, cmd) {
    const replies = ['0', '1', '115', '30', '22', `88`, `17`, `140`, `63`, `7`, `59`, `78`, `-15`, `-7`, `134`, `46`, `66`, `Schwerbehindert`]; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed() // create embed 
        .setAuthor('🧠IQ calculator')
        .setColor('#ed54ba')
        .addField('Your IQ is:', replies[result])
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Your IQ is:** ``${replies[result]}`` `); // no permissins so bot will default to a raw message
    }
  },
};