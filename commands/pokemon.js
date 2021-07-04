module.exports.config = {
    name: "pokemon",
    cooldown: '1',
    group: "fun",
    example: '!pokemon charizard',
    usage: 'pokemon <pokemon>',
    description: "Gets information on a pokemon."
}

module.exports.run = async(client, message, args) => {
    
    
		// Search for pokemon
		const res = await fetch(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${message.args.join(' ')}`)
			.then((info) => info.json())
			.catch((err) => {
				// An error occured when looking for account
				if (message.deletable) message.delete();
				bot.logger.error(`Command: '${this.help.name}' has error: ${err.message}.`);
				msg.delete();
				return message.channel.error('misc:ERROR_MESSAGE', { ERROR: err.message }).then(m => m.timedDelete({ timeout: 5000 }));
			});

		// Send response to channel
		const embed = new Embed(bot, message.guild)
			.setAuthor(res.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${res.images.typeIcon}`)
			.setDescription(`Type of this pokemon is **${res.info.type}**. ${res.info.description}`)
			.setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${res.images.photo}`)
			.setFooter(`Weakness of pokemon - ${res.info.weakness}`, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${res.images.weaknessIcon}`);
		msg.delete();
		message.channel.send({ embeds: [embed] });
	}

	


