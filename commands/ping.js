module.exports = {
    name: 'ping',
    execute(client, message, args, Discord, cmd){
        message.channel.send({embed: {description: `:postal_horn: ・ Pong! ${client.ws.ping}ms`, color: 'BLUE' }});
    }
}