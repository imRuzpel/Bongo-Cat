const Canvas = require('canvas');

module.exports = {
    name: 'delete',
    async execute(client, message, args, Discord, cmd) {
        const member = message.mentions.members.first() || message.member;
        const canvas = Canvas.createCanvas(748, 356);
        const ctx = canvas.getContext('2d');

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png' }));
        ctx.drawImage(avatar, 0, 0, 164, 164);

        const background = await Canvas.loadImage('./canva/delete.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'delete.png');

        message.channel.send(attachment);
    }
}