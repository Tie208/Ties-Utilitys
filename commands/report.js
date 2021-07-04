const { MessageEmbed, Client, Message } = require('discord.js');

module.exports.config = {
    name: "report",
    group: "misc",
    usage: 'report <user> <reason>',
    example: "report @tie spamming in general",
    botperms: ["EMBED_LINKS"],
    description: "Allows any user to report someone if a mod isn't on site."
}

module.exports.run = async(client, message, args) => {

    const messageArray = message.content.split(' ');
    const bargs = messageArray.slice(1);

    

    

    let target = message.mentions.members.first() || message.guild.members.get(bargs[0]);
    if(!target) return message.channel.send('Please provide a user that you wish to report').then(m => m.delete(15000));
    
    let reason = bargs.slice(1).join(" ");
    if(!reason) return message.channel.send(`Please provide a reason for reporting **${target.user.username}**`).then(m => m.delete(15000));

    let reportChannel = message.guild.channels.cache.find(x => x.name === "📒▸logs");
    
    message.channel.send('Your report has been filed to the staff team. Thank you for reporting!').then(m => m.delete(15000));
    reportChannel.send(`**${message.author.username}** has reported **${target.user.username}** for **${reason}**.`);
    


}








    

        
         