const ms = require('ms');
module.exports = {
    name: 'mute',
    execute(client, message, args, Discord, cmd) {
        if(!message.member.hasPermission("MANAGE_ROLES")){
            return message.reply({embed: {description: ':crossed_swords: ・ You dont have the correct permissions!', color: 'DARK_RED' }}).catch(e=>console.log(e.stack.toString().red));
        }
        const target = message.mentions.users.first();
        if (target) {
 
            let muteRole = message.guild.roles.cache.find(role => role.name === '・muted');
            if(!muteRole) {
                message.guild.roles.create({ data: { name: '・muted', permissions: ['SEE_CHANNELS'] } });
                return message.channel.send({embed: {description: ':crossed_swords: ・ Mute role has been created!', color: 'BLUE' }}).then(msg=>msg.delete({timeout: "10000"}));
                }

            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.add(muteRole);
                const MutedEmbed = new Discord.MessageEmbed()
                .setTitle('Mute')
                .setColor('BLUE')
                .setDescription(`🔒 <@${memberTarget.user.id}> has been muted!`)
                .setTimestamp()
                message.channel.send(MutedEmbed)
                return
            }
            memberTarget.roles.add(muteRole);
            const newEmbed = new Discord.MessageEmbed()
            .setTitle('Mute')
            .setColor('GREEN')
            .setDescription(`🔒 <@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)
            .setTimestamp()
            message.channel.send(newEmbed)
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole);
            }, ms(args[1]));
        } else {
            return message.reply({embed: {description: ':no_entry_sign: ・ Please pass in all required arguments.', color: 'RED' }});
        }
    }
}
 