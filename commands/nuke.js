module.exports = {
    name: 'nuke',
    async execute(client, message, args, Discord, cmd) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send({embed: {description: '**You dont have permissions to do that!**', color: 'RED' }});
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send({embed: {description: '**I dont have permissions to do that**', color: 'RED' }});

        message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.position);
            message.channel.delete()

            const Embed = new Discord.MessageEmbed()
            .setTitle('<a:bongocat:853223037636837386>  Channel got nuked!')
            .setImage('https://i.imgur.com/r7cKWPo.gif')
            .setColor('#9bdeff')
            .setTimestamp();
            ch.send(Embed)
        })
    }
}