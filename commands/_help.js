const Pagination = require('discord.js-pagination')

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    execute(client, message, args, Discord, cmd){

        const page1 = new Discord.MessageEmbed()
        .setTitle('Help menu')
        .setDescription('These are all my commands <a:bongocat:853223037636837386>\n \n`ban <member>`,\n`kick <member>`,\n`mute <member>`,\n`unmute <member>`,')
        .setFooter('Page 1/6')
        .setColor('#9B59B6')

        const page2 = new Discord.MessageEmbed()
        .setTitle('Help menu')
        .setDescription('These are all my commands <a:bongocat:853223037636837386>\n \n`clear <valiue>`,\n`nuke`,\n`lock`,\n`unlock`,')
        .setFooter('Page 2/6')
        .setColor('#9B59B6')

        const page3 =new Discord.MessageEmbed()
        .setTitle('Help menu')
        .setDescription('These are all my commands <a:bongocat:853223037636837386>\n \n`howgay`,\n`iq <member>`,\n`slowmode <valiue>`,\n`steal <emoji>`')
        .setFooter('Page 3/6')
        .setColor('#9B59B6')

        const page4 =new Discord.MessageEmbed()
        .setTitle('Help menu')
        .setDescription('These are all my commands <a:bongocat:853223037636837386>\n \n`play <song>`,\n`stop`,\n`skip`,\n`meme,`')
        .setFooter('Page 4/6')
        .setColor('#9B59B6')

        const page5 =new Discord.MessageEmbed()
        .setTitle('Help menu')
        .setDescription('These are all my commands <a:bongocat:853223037636837386>\n \n`cute`,\n`8ball <queston>`,\n`tictactoe <member>`,\n`say <message>,`')
        .setFooter('Page 5/6')
        .setColor('#9B59B6')

        const page6 =new Discord.MessageEmbed()
        .setTitle('Help menu')
        .setDescription('These are all my commands <a:bongocat:853223037636837386>\n \n`hack <member>`,\n`rank <member>`,\n`crypto-<currency>`,\n`bongo-cat,`')
        .setFooter('Page 6/6')
        .setColor('#9B59B6')

        const pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
        ]

        const emojilist = ["⬅️", "➡️"]

        const timeout = '600000';

        Pagination(message, pages, emojilist, timeout)
    }
}