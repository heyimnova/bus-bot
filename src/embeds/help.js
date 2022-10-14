const { EmbedBuilder } = require("discord.js");

module.exports = (interaction, embedFields) =>
	EmbedBuilder.from({
		color: 0xe63312,
		description:
			"(Only /help and /setup are available before setup is complete)",
		footer: {
			text: `Sent from ${interaction.guild.name}`,
			icon_url: interaction.guild.iconURL()
		},
		thumbnail: {
			url: interaction.client.user.avatarURL()
		},
		timestamp: Date.now(),
		title: "Commands:",
		fields: [...embedFields]
	});
