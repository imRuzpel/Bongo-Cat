const Discord = require('discord.js');
const client = new Discord.Client();
const { afk } = require('./Collection')
const moment = require('moment')
require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.once('ready', () => {
    console.log('Connected to Discord\nConnected to Discord Application\nLoading Commands...\n✔️ ・ loaded Bongo Cat.exe\n✔️ ・ loaded app.js\n✔️ ・ loaded Canvas Commands\n✔️ ・ loaded Moderation Commands\n✔️ ・ loaded Fun Commands\n✔️ ・ loaded Owner Commands\n✔️ ・ loaded Help Commands\n✔️ ・ loaded Music Commands\n❌ ・ Error loading Casino Commands')
    client.user.setPresence({ activity : { name: `dir`, type: `LISTENING` }, status: `idle` })
});

client.on('message', async(message) => {
    if (!message.guild || message.author.bot) return;

    const mentionMember = message.mentions.members.first();
    if (mentionMember) {
        const data = afk.get(mentionMember.id);

        if (data) {
            const [ timestamp, reason ] = data;
            const timeAgo = moment(timestamp).fromNow();

            message.channel.send({embed: {description: `${mentionMember.user} is curretly afk, the reason is ${reason}`, color: '#735BC1'}});
        }
    }

    const getData = afk.get(message.author.id);
    if (getData) {
        afk.delete(message.author.id)
        message.channel.send({embed: {description: `${message.member} afk has been removed!`, color: '#735BC1'}});
    }
});

client.login(process.env.DISCORD_TOKEN);
