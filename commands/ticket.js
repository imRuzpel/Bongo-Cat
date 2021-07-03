module.exports = {
    name: 'ticket',
    async execute(client, message, args, Discord, cmd) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send({embed: {description: 'You dont have Permission to do that!', color: 'RED'}})

        var ticketRole = message.guild.roles.cache.find(role => role.name === 'ticket');
        if(!ticketRole) {
            message.guild.roles.create({ data: { name: 'ticket', permissions: ['VIEW_CHANNEL'] } });
            message.channel.send({embed: {description: 'The `@ticket` role has acces to the tickets!', color: 'Green'}}).then(msg=>msg.delete({timeout: "5000"}));
        };

        var Create_a_Ticket_Embed = new Discord.MessageEmbed()
        .setDescription('<a:wa:854341295928246272> ・ **Open a ticket**')
        .setColor('#9B59B6')
        reactionMessage1 = await message.channel.send(Create_a_Ticket_Embed);

        try {
            await reactionMessage1.react("📽️")
        } catch(err) {
            console.log(err)
            message.channel.send('```Error sending emojis!```').then(() => message.delete(), 6000)
            throw err
        }

        var collector = reactionMessage1.createReactionCollector(
            (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("MANAGE_CHANNELS"),
            { dispose: true }
          );

        collector.on ("collect", async(reaction, user) => {
            switch (reaction.emoji.name) {
            case "📽️":
                const channel = await message.guild.channels.create(`💬${message.author.tag}`);
                channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
                channel.updateOverwrite(message.author, { SEND_MESSAGE: true, VIEW_CHANNEL: true });
                channel.updateOverwrite(ticketRole, { SEND_MESSAGE: true, VIEW_CHANNEL: true });
                reactionMessage2 = await channel.send({embed: {description: '<a:wa:854341295928246272> ・ **Welcome in ticket support!**', color: '#9B59B6'}})
                hereping = await channel.send('@here')
                setTimeout(() => hereping.delete(), 1)
                try {
                    await reactionMessage2.react("⛔")
                    await reactionMessage2.react("🔒")
                } catch(err) {
                console.log(err)
                message.channel.send('```Error sending emojis!```').then(() => message.delete(), 6000)
                throw err
                }
                break;
            case "⛔":
                channel.send({embed: {description: '⛔ ・ ticket will be delete itself in 5 seconds', color: '#9B59B6'}})
                setTimeout(() => channel.delete(), 5000);
                break;
            case "🔒":
                channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
                break;
            }
          });
    }
}