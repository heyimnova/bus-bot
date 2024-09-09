const { EmbedBuilder } = require("discord.js");

module.exports = (client, guild, bus) =>
	EmbedBuilder.from({
		author: {
			name: "Bus Bot",
			url: `${process.env.COLLEGE_WEBSERVICES_URL}/bus/busdepartures.aspx`,
			icon_url: client.user.avatarURL()
		},
		color: 0xe63312,
		footer: {
			text: `Brought to you by ${guild.name}`,
			icon_url: guild.iconURL()
		},
		image: {
			url: `${process.env.COLLEGE_WEBSERVICES_URL}/bus/BusLaneMap.png`
		},
		timestamp: Date.now(),
		title: `Location of ${bus._id}`,
		url: `${process.env.COLLEGE_WEBSERVICES_URL}/bus/busdepartures.aspx?Service=${bus._id}`,
		fields: [
			{ name: "Bus:", value: bus._id, inline: true },
			{
				name: "Location:",
				// If the bus doesn't have a location, set its location to "Not yet arrived!"
				value: /-/.test(bus.location) ? "Not yet arrived!" : bus.location,
				inline: true
			}
		]
	});
