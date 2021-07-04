module.exports.config = {
    name: "support",
    guarded: true,
    cooldown: '1',
    group: "info",
    example: '>support',
    usage: 'support',
    description: "Be invited to our support server."
}

module.exports.run = async(client, message, args ) =>{
    message.author.send("**Welcome to our support server!**\nhttps://discord.gg/MNT6UQ6jRu\n If you need immediate help DM Tie#0001")
}