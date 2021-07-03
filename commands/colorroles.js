module.exports = {
    name: 'colorroles',
    async execute(message, args, Discord, client) {
      if(!message.member.hasPermission("ADMINISTRATOR")){
          return message.channel.send({embed: {description: ':crossed_swords: ・ You dont have the correct permissions!', color: 'DARK_RED' }}).catch(e=>console.log(e.stack.toString().red));
      }

        const channel = '857293889161527298';
        const CocainyGrey = message.guild.roles.cache.find(role => role.name === "🧂・Cocainy Grey");
        const PinkDynasty = message.guild.roles.cache.find(role => role.name === "🍑・Pink Dynasty");
        const IcyBlue = message.guild.roles.cache.find(role => role.name === "🥶・Icy Blue");
        const MintyGreen = message.guild.roles.cache.find(role => role.name === "🥬・Minty Green");
        const YellowBridge = message.guild.roles.cache.find(role => role.name === "🍌・Yellow Bridge");
        const OrchidPurple = message.guild.roles.cache.find(role => role.name === "🍇・Orchid Purple");

        const CocainyGreyEmoji = '🧂';
        const PinkDynastyEmoji = '🍑';
        const IcyBlueEmoji = '🥶';
        const MintyGreenEmoji = '🥬';
        const YellowBridgeEmoji = '🍌';
        const OrchidPurpleEmoji = '🍇';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Color Roles')
            .setDescription('@🧂・Cocainy Grey : 🧂\n@🍑・Pink Dynasty : 🍑\n🥶・Icy Blue : 🥶\n🥬・Minty Green : 🥬\n🍌・Yellow Bridge : 🍌\n🍇・Orchid Purple : 🍇');

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(CocainyGreyEmoji);
        messageEmbed.react(PinkDynastyEmoji);
        messageEmbed.react(IcyBlueEmoji);
        messageEmbed.react(MintyGreenEmoji);
        messageEmbed.react(YellowBridgeEmoji);
        messageEmbed.react(OrchidPurpleEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
              if (reaction.emoji.name === CocainyGreyEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(CocainyGrey);
              }
              if (reaction.emoji.name === PinkDynastyEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(PinkDynasty);
              }
              if (reaction.emoji.name === IcyBlueEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(IcyBlue);
              }
              if (reaction.emoji.name === MintyGreenEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(MintyGreen);
              }
              if (reaction.emoji.name === YellowBridgeEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(YellowBridge);
              }
              if (reaction.emoji.name === OrchidPurpleEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(OrchidPurpleEmoji);
              }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === CocainyGreyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(CocainyGrey);
                }
                if (reaction.emoji.name === PinkDynastyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(PinkDynasty);
                }
                if (reaction.emoji.name === IcyBlueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(IcyBlue);
                }
                if (reaction.emoji.name === MintyGreenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MintyGreen);
                }
                if (reaction.emoji.name === YellowBridgeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(YellowBridge);
                }
                if (reaction.emoji.name === OrchidPurpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(OrchidPurpleEmoji);
                }
            } else {
                return;
            }
        });
    }

}
