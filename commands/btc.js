const btcValue = require('btc-value');
btcValue.setApiKey(process.env.BTC_API_KEY);
const Euro = [
{
    "name": "Dollar",
    "code": "USD",
    "symbol": "$"
}
]
module.exports = {
    name: 'btc',
    aliases: ['crypto', 'btcValue', 'dollar'],
    async execute(client, message, args, Discord, cmd){
        const btc = await btcValue({currencyCode: 'EUR'}).then(value => {
            const btcEUREmbed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`One ₿itcoin is worth **${value}**$`)
            message.channel.send(btcEUREmbed)
        });

    }
}
