const { Client, Message, Util } = require('discord.js')

module.exports = {
    name: "steal",
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute(client, message, args, Discord, cmd) {
        if(!message.member.hasPermission("MANAGE_EMOJIS")){
            return message.channel.send({embed: {description: ':crossed_swords: ・ You dont have the correct permissions!', color: 'DARK_RED' }}).catch(e=>console.log(e.stack.toString().red));
        }
        // -steal <emoji> <emoji> <emoji>
        if (!args.length) return message.channel.reply({embed: {description: ':no_entry: ・ Please spacify some emojis!', color: 'BLUE' }});

        for (const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if (parsedEmoji.id) {
                // .gif .png
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
                message.guild.emojis.create(url, parsedEmoji.name)
                .then((emoji) => message.channel.send({embed: {description: '<a:yes:853205223139835935> ・ Added emoji!', color: '#735BC1' }}))
            }
        }
    },
};