const { EmbedBuilder } = require("discord.js");
const getEmbedFields = require("../modules/calculateSetupProgressFields");

module.exports = (replyProgress) =>
	EmbedBuilder.from({
		color: 0xe63312,
		description: "(This may take some time...)",
		timestamp: Date.now(),
		title: "Setup Progress...",
		fields: getEmbedFields(replyProgress)
	});
