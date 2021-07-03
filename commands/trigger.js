const canvacord = require("canvacord");
const { MessageAttachMent, MessageAttachment } = require("discord.js");

module.exports = {
    name: 'trigger',
    execute: async(client, message, args, cmd) => {

        const member = message.mentions.members.first() || message.member;

        const triggered = await canvacord.Canvas.trigger(member.user.displayAvatarURL({ dynamic: true, format: 'png' }));

        const attachment = new MessageAttachment(triggered, "triggered.gif");

        message.channel.send(attachment);
    }
}