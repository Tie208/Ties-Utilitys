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

    message.author.send("**Information**\n ```>support - be invited to our support server \n>help - to get a list of commands \n>partners - view our partnerships \n>privacy to view our privacy policy```")
}





