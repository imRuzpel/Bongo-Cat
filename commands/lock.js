const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'lock',
    execute(client, message, args, Discord, cmd) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
    
        message.channel.send({embed: {description: '<a:yes:853205223139835935> ・ Channel has been Locked!', color: 'GREEN'}})
    
        try {
            db.set(`lock.${message.channel.id}`,message.author.id)
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"),{
                SEND_MESSAGES:false,
                ADD_REACTIONS:false
            })
    
        }catch(e){
            
        }
    }
}

