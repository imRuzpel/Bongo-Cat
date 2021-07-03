const Canvas = require('canvas');

module.exports = {
    name: 'bongocat',
    async execute(client, message, args, Discord, cmd) {
        const member = message.mentions.members.first() || message.member;
        const canvas = Canvas.createCanvas(512, 512);
        const ctx = canvas.getContext('2d');

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png' }));
        ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

        const background = await Canvas.loadImage('./canva/bongocat.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'bongocat.png');

        message.channel.send(attachment);
    }
}