const { tictactoe } = require('reconlx')

module.exports = {
    name: 'tictactoe',
    async execute(client, message, args, Discord, cmd) {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send({embed: {description: ':no_entry_sign: ・ Please pass in all required arguments.', color: 'RED' }})
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}