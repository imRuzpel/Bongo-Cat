const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(client, message, args) {
    if (!args[0]) return message.channel.send('Please ask a full question!');
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.'];

    const result = Math.floor(Math.random() * replies.length);
    const question = args.join(' ');
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed()
        .setColor('#735BC1')
        .setDescription(`:8ball: ・ ${question} ,  ${replies[result]}`)
      await message.channel.send(embed);
    }
  },
};