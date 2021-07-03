const Canvas = require('canvas');

module.exports = {
    name: 'amongus',
    async execute(client, message, args, Discord, cmd) {
        const member = message.mentions.members.first() || message.member;
        const canvas = Canvas.createCanvas(512, 512);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage(member.user.displayAvatarURL({ dynamic: true, size: 256, format: 'png' }));
        ctx.drawImage(background, 170, 60, 155, 155);

        const avatar = await Canvas.loadImage('./canva/amongus.png');
        ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'amongus.png');

        message.channel.send(attachment);
    }
}