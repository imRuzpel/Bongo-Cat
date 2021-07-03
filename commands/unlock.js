const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'unlock',
    execute(client, message, args, Discord, cmd) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
    
        const msg = message.channel.send({embed: {description: '<a:yes:853205223139835935> ・ Channel has been Unlocked!', color: 'GREEN'}})
    
        try {
            db.set(`lock.${message.channel.id}`,message.author.id)
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"),{
                SEND_MESSAGES:true,
                ADD_REACTIONS:true
            })
    
        }catch(e){
        }
    }
}

