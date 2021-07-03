const ms = require('ms')

module.exports = {
    name: 'slowmode',
    aliases: ['slow'],
    execute(client, message, args, Discord, cmd) {
        if(!message.member.permissions.has('MANAGE_CHANNELS')) return;
        if(!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.channel.send({embed: {description: ':hourglass: ・ The slowmode has been removed!', color: 'BLUE' }})
        }

        const raw = args[0];
        const millieseconds = ms(raw);

        if(isNaN(millieseconds)) return message.reply({embed: {description: ':hourglass: ・ This is not a valid time!', color: 'RED' }});

        if(millieseconds < 1000) return message.reply({embed: {description: ':hourglass: ・ The minimum slowmode is 1 second!', color: 'RED' }});

        message.channel.setRateLimitPerUser(millieseconds / 1000);
        message.channel.send(
            `:hourglass: ・ The slowmode for this channel has been set to ${ms(millieseconds, {
                long: true
            })}`
        ) 
    },
};