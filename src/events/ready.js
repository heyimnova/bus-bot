const { ActivityType } = require("discord.js");

module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		console.log(`${client.user.tag} is ready`);
		client.user.setActivity("/help", { type: ActivityType.Listening });
	}
};
