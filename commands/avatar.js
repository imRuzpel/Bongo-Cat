const { DiscordAPIError, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic', 'pb'],
    execute(client, message, args, Discord, cmd) {

        const member = message.mentions.members.first() || message.member;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`${member.user.tag}'s avatar`)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor('GREEN')
        )
    }
}