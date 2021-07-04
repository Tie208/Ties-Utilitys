module.exports.config = {
    name: "information",
    guarded: true,
    cooldown: '1',
    group: "info",
    example: '!information',
    usage: 'information',
    description: "Gives information about Tie's Utilities."
}

module.exports.run = async(client, message, args) => {
 
    message.channel.send("**Information**\n ```@tie's Utilities support - be invited to our support server \n@tie's Utilities help - to get a list of commands \n@tie's Utilities partners - view our partnerships \n@tie's Utilities privacy to view our privacy policy```")
}





