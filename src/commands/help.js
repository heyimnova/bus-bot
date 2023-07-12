const { SlashCommandBuilder } = require("@discordjs/builders");
const { Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("DM's you with instructions on the Bus Bot's commands!"),
  async execute(interaction) {
    // An object containing all command names and descrptions for every command in embed field format
    const embedFields = await interaction.client.commands.map((command) => {
      return {
        name: `/${command.data.name}`,
        value: `- ${command.data.description}`,
      };
    });

    // DM the user the embed
    await interaction.user.send({
      embeds: [
        new Embed()
          .hexColor(0xe63312)
          .setDescription(
            "(Only /help and /setup are available before setup is complete)"
          )
          .setFooter({
            text: `Sent from ${interaction.guild.name}`,
            iconURL: interaction.guild.iconURL(),
          })
          .setThumbnail(interaction.client.user.avatarURL())
          .setTimestamp(Date.now())
          .setTitle("Commands:")
          .addFields(...embedFields),
      ],
    });

    // Reply to the message as well so discord doesn't complain
    await interaction.reply("A help message has been sent to your dms!");
  },
};
