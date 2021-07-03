var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    aliases: ['google', 'img', 'png', 'jpg'],
    async execute(client, message, args, Discord, cmd) {
        const image_query = args.join(' ');
        if (!image_query) return message.channel.send({embed: {description: ':no_entry_sign: ・ Please pass in all required arguments.', color: 'RED' }})

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }

}