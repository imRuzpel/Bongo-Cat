const Canvas = require('canvas');

module.exports = {
    name: 'toilet',
    async execute(client, message, args, Discord, cmd) {
        const member = message.mentions.members.first() || message.member;
        const canvas = Canvas.createCanvas(500, 670);
        const ctx = canvas.getContext('2d');

        const avatar = await Canvas.loadImage('./canva/toilet.png');
        ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

        const background = await Canvas.loadImage(member.user.displayAvatarURL({ dynamic: true, size: 256, format: 'png' }));
        ctx.drawImage(background, 135, 350, 205, 205);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'toilet.png');

        message.channel.send(attachment);
    }
}