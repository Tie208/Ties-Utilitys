module.exports.config = {
    name: "slowmode",
    guarded: true,
    cooldown: '1',
    group: "moderation",
    example: '!slowmode 3',
    usage: 'slowmode <amount>',
    description: "Set the Slowmode of the current channel."
}

module.exports.run = async(client, message, args) => {

    const messageArray = message.content.split(' ');
    const bargs = messageArray.slice(1);
        if(!message.member.hasPermission('MANAGE_MESSAGES')) 
        return message.channel.send("You need `MANAGE_MESSAGES` permission to execute this command.");
  
      message.channel.setRateLimitPerUser(bargs[0]);
    message.channel.send(`Slowmode has been set to: ${args[0]} Seconds`)
}



