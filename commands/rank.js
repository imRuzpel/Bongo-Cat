const Canvas = require('canvas');

const { MessageAttachment } = require('discord.js');

const xpfile = require("../xp.json");

module.exports = {
    name: 'rank',
    async execute(client, message, args, Discord, cmd) {
        const member = message.mentions.members.first() || message.member;
        const canvas = Canvas.createCanvas(900, 220);
        const ctx = canvas.getContext('2d');

        if (!xpfile[message.author.id]) return message.channel.send({embed: {description: 'You dont have any levels!', color: 'RED'}});
        if (!member) return;

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ dynamic: true, format: 'png' }));
        ctx.drawImage(avatar, 61, 49, 128, 128,);

        const background = await Canvas.loadImage('./canva/rank-card.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#FCEAA8'
        ctx.font = '45px plumpfull'
        const text = `${member.user.tag}`
        ctx.fillText(text, 222, 125, canvas.width, canvas.height)

        ctx.fillStyle = '#ffffff'
        ctx.font = '25px plumpfull'
        const jtext = (`${xpfile[member.id].level}`) 
        ctx.fillText(jtext, 758, 76, canvas.width, canvas.height)

        ctx.fillStyle = '#ffffff'
        ctx.font = '25px plumpfull'
        const gtext = (`${xpfile[message.author.id].xp+'  /  '+xpfile[message.author.id].reqxp}`) 
        ctx.fillText(gtext, 714, 183, canvas.width, canvas.height)

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'bongocat.png');

        message.channel.send(attachment);
    }
}