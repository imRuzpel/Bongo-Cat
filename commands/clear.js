module.exports = {
    name: 'clear',
    aliases: ['del', 'delete', 'purge'], 
    async execute(client, message, args, Discord, cmd) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.channel.send({embed: {description: ':crossed_swords: ・ You dont have the correct permissions!', color: 'DARK_RED' }}).catch(e=>console.log(e.stack.toString().red));
        }
        if (!args[0]) return message.channel.send({embed: {description: ':no_entry_sign: ・ Please pass in all required arguments.', color: 'RED' }});
        if(isNaN(args[0])) return message.channel.send({embed: {description: ':one: ・ Please enter a real number!', color: 'RED' }});

        if (args[0] > 100) return message.channel.send({embed: {description: ':infinity: ・ Cannot clear more than 100 messages!', color: 'YELLOW' }});
        if (args[0] < 1) return message.channel.send({embed: {description: ':cyclone: ・ You must delete atleast one message!', color: 'YELLOW' }});

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        message.channel.send({embed: {description: `:broom: ・ You cleared ${args[0]} messages!`, color: 'GREEN' }}).then(msg=>msg.delete({timeout: "10000"}));
    }
}