module.exports = {
    name: 'ac',
    aliases: ['activity'],
    execute(client, message, args, Discord, cmd) {
        if(message.author.id !== `852948872691318785`) return message.channel.send('You dont have permissions!')
if (args[0] === "playing"){
    types = 0
} else if (args[0] === "streaming") {
    types = 1
} else if (args[0] === "listening") {
    types = 2
} else if (args[0] === "watching") {
    types = 3
} else if (args[0] === "competing") {
    types = 5
} else if (args[0] === "reset") {

    client.user.setActivity(`dir`, {type:"LISTENING"}) //you can change that to whatever you like

    return message.channel.send({embed: {description: '<a:bongoTap:848572546698051594> ・ Status changed succesfully', color: '#735BC1' }})

} else {
    return message.channel.send({embed: {description: ':no_entry_sign: ・ Invalid activity type.', color: 'BLUE' }})
}
//here you tell the bot what the activity is
    args.shift()
    content = args.join(' ')
    client.user.setPresence({
        activity: {
            name: content,
            type: types
        }
    })
    message.channel.send({embed: {description: '<a:bongoTap:848572546698051594> ・ Status changed succesfully', color: '#735BC1' }})
    }
}