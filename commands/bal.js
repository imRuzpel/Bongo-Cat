module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    execute(message, args, cmd, client, discord, profileData) {
      message.channel.send(`Your wallet bal is ${profileData.coins}, you banks bal is ${profileData.bank}`);
    },
  };