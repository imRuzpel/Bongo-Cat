module.exports = async (Discord, client, message) => {
    const prefix = 'b!';
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try {
        command.execute(client, message, args, Discord, cmd);
    } catch (err) {
        message.channel.send({embed: {description: ':mag: ・ Cannot find this command!', color: 'RED' }})
    }

    if (message.author.bot) return;
}
