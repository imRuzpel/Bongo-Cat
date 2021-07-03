const Canvas = require('canvas');

module.exports = {
    name: 'rip',
    async execute(client, message, args, Discord, cmd) {
        const member = message.mentions.members.first() || message.member;
        const canvas = Canvas.createCanvas(512, 512);
        const ctx = canvas.getContext('2d');

        const avatar = await Canvas.loadImage('./canva/rip.png');
        ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

        const background = await Canvas.loadImage(member.user.displayAvatarURL({ dynamic: true, size: 256, format: 'png' }));
        ctx.drawImage(background, 150, 250, 210, 210);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'rip.png');

        message.channel.send(attachment);
    }
}