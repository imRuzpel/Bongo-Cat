module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, args, Discord, cmd){
        if(!message.member.hasPermission("KICK_MEMBERS")){
            return message.channel.send({embed: {description: ':crossed_swords: ・ You dont have the correct permissions!', color: 'DARK_RED' }}).catch(e=>console.log(e.stack.toString().red));
        }
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send({embed: {description: `:wastebasket: ・ ${args[0]} has been kicked`, color: 'BLUE' }});
        }else{
            message.channel.send({embed: {description: ':no_entry_sign: ・ Please pass in all required arguments.', color: 'RED' }});
        }
    }
}