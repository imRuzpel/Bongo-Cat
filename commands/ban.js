module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(client, message, args, Discord, cmd){
        if(!message.member.hasPermission("BAN_MEMBERS")){
            return message.channel.send({embed: {description: ':crossed_swords: ・ You dont have the correct permissions!', color: 'DARK_RED' }}).catch(e=>console.log(e.stack.toString().red));
        }
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send({embed: {description: `:wastebasket: ・ ${args[0]} has been banned`, color: 'BLUE' }});
        }else{
            message.channel.send({embed: {description: ':no_entry_sign: ・ Please pass in all required arguments.', color: 'RED' }});
        }


    }
    
}
