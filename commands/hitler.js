const Canvas = require('canvas');

module.exports = {
    name: 'hitler',
    async execute(client, message, args, Discord, cmd) {
        const member = message.mentions.members.first() || message.member;
        const canvas = Canvas.createCanvas(480, 360);
        const ctx = canvas.getContext('2d');

        const avatar = await Canvas.loadImage('./canva/hitler.png');
        ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

        const background = await Canvas.loadImage(member.user.displayAvatarURL({ dynamic: true, size: 256, format: 'png' }));
        ctx.drawImage(background, 52, 42, 128, 128);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'hitler.png');

        message.channel.send(attachment);
    }
}