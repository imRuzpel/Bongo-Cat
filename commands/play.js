const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const fs = require('fs');
const Discord = require('discord.js');


const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'], 
    description: 'Advanced music bot',
    async execute(client, message, args, Discord, cmd){


        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send({embed: {description: ':mute: ・ You need to be in a Voice channel, to use this command!', color: 'RED' }});
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send({embed: {description: ':crossed_swords: ・ You dont have the correct permissions!', color: 'RED' }});
        if (!permissions.has('SPEAK')) return message.channel.send({embed: {description: ':crossed_swords: ・ You dont have the correct permissions!', color: 'RED' }});

        const server_queue = queue.get(message.guild.id);

        //If the user has used the play command
        if (cmd === 'play'){
            if (!args.length) return message.channel.send({embed: {description: ':no_entry_sign: ・ Please pass in all required arguments.', color: 'DARK_RED' }});
            let song = {};

            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
            } else {
                const video_finder = async (query) =>{
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if (video){
                    song = { title: video.title, url: video.url }
                } else {
                     message.channel.send({embed: {description: ':mag: ・ Cannot find this video!', color: 'RED' }});
                }
            }

            if (!server_queue){

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
                
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send({embed: {description: ':x: ・ There was an error connecting!', color: 'RED' }});
                    throw err;
                }
            } else{
                server_queue.songs.push(song);
                return message.channel.send({embed: {description: `:white_check_mark: ・ **${song.title}** added to the queue!`, color: 'GREEN' }});
            }
        }

        else if(cmd === 'skip') skip(message, server_queue);
        else if(cmd === 'stop') stop(message, server_queue);
    }
    
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send({embed: {description: `:notes: ・ Now playing **${song.title}**`, color: '#735BC1' }})
}

const skip = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send({embed: {description: ':mute: ・ You need to be in a Voice channel, to use this command!', color: 'RED' }});
    if(!server_queue){
        return message.channel.send({embed: {description: ':no_bell: ・ There are no songs in queue!', color: 'YELLOW' }});
    }
    server_queue.connection.dispatcher.end();
}

const stop = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send({embed: {description: ':mute: ・ You need to be in a Voice channel, to use this command!', color: 'RED' }});
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
    return message.channel.send({embed: {description: ':wave: ・ Bye im leaving now', color: 'RED' }});
}