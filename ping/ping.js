const Discord = require('discord.js');

const config = {
    description: 'Pinga il bot per sapere quanto ritardo ha su discord.',
    aliases: [],
    rolesRequired: [],
    category: '<:3224_info:790237145574014997> Informazioni',
    cooldown: 5,
}
module.exports = {
    config,
    run: async (client, message, args) => {

if(!message.channel.guild) return message.channel.send(':x: This command should only be used on the server. ');

    const ping = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Ping')
    .setDescription("My Ping: `" + `${Date.now() - message.createdTimestamp}` + " ms`")
    .setFooter(`Required by: ${message.author.username}`);
     message.channel.send(ping);
   },
};
