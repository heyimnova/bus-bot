const { SlashCommandBuilder } = require("@discordjs/builders");
const createHelpEmbed = require("../embeds/help");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("DM's you with instructions on the Bus Bot's commands!"),
  async execute(interaction) {
    // An object containing all command names and descriptions for every command in embed field format
    const embedFields = await interaction.client.commands.map((command) => {
      return {
        name: `/${command.data.name}`,
        value: `- ${command.data.description}`,
      };
    });

    // DM the user the embed
    await interaction.user.send({
      embeds: [createHelpEmbed(interaction, embedFields)],
    });

    // Reply to the message as well so discord doesn't complain
    await interaction.reply("A help message has been sent to your dms!");
  },
};
