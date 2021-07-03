const { Client, Message, MessageEmbed } = require('discord.js');
const { afk } = require('../Collection/index');
module.exports = {
    name: 'afk',
    async execute(client, message, args) {
        const reason = args.join(" ") || 'no reason'

        afk.set(message.author.id, [ Date.now(), reason]);

        message.channel.send({embed: {description: `You are now afk, the reason is \`${reason}\``, color: 'BLUE'}})
    }        
}