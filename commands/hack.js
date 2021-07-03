module.exports = {
    name: 'hack',
    aliases: ['hacking', 'hacked'],
    execute(client, message, args, Discord, cmd) {
        const member = message.mentions.members.first() || message.member;
        const email = [`${member}@gmail.com`, `${member}@mail.ch`, `${member}@mail.at`, `${member}@mail.de`, `${member}@gmail`, `${member}@yahoo.com`, `${member}@hotmail.com`]
        const passwort = ['aOG3pB8MGttSH4', 'R16uLDqhUV1X', 'wxPiVXXbqGyE', 'tlakjPMbnToul', 'l0oGvnphVpdQVRm', 'cA7Z9KdYZgJ5Kq', '4K4d0Xhy8', 'Gk1ZCIxAZkvq', 'ldLIwTRNGgvdY']
        const ip_addresse = ['686.801.995.337', '42.083.223.150', '38.601.677.715', '32.751.015.741', '46.100.502.154', '711.424.088.585', '696.084.762.224', '90.062.678.997', '11.769.755.242']
        const result = Math.floor(Math.random() * replies.length);

        const EmbedFinish = Discord.MessageEmbed()
            .setTitle(`***Hacking Tool***`)
            .setDescription(`**Here are the dates from** ${member.user.tag}  **!**`)
            .setField('**E-mail**', `${email[result]}`)
            .setField('**Password**', `${passwort[result]}`)
            .setField('**IP address**', `${ip_adresse[result]}`)
            .setFooter('This is a fun tool and is for entertainment only.')

    }
}