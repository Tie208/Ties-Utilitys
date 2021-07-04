module.exports.config = {
    name: "privacy",
    guarded: true,
    cooldown: '1',
    group: "info",
    example: '>privacy',
    usage: 'privacy',
    description: "view our privacy policy"
}

module.exports.run = async(client, message, args ) =>{
    message.channel.send("**Here is our Privacy Policy!**\nhttps://bit.ly/2V2ZnvL\nIf you have any questions please DM Tie#0001")
}