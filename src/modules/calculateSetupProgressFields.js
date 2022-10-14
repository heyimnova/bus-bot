module.exports = (replyProgress) => {
  // Initialise the field name variables with ⚪
  const progressFields = {
    roles: { name: "⚪", value: "Create Roles!" },
    channel: { name: "⚪", value: "Create Channel!" },
    commands: { name: "⚪", value: "Register Commands!" },
    complete: { name: "⚪", value: "Complete Setup!" }
  };

  switch (replyProgress) {
  case "rolesComplete":
    progressFields.roles.name = "🟢";
    progressFields.channel.name = "🟡";
    break;

  case "channelComplete":
    progressFields.roles.name = "🟢";
    progressFields.channel.name = "🟢";
    progressFields.commands.name = "🟡";
    break;

  case "commandsComplete":
    progressFields.roles.name = "🟢";
    progressFields.channel.name = "🟢";
    progressFields.commands.name = "🟢";
    progressFields.complete.name = "🟡";
    break;

  case "setupComplete":
    progressFields.roles.name = "🟢";
    progressFields.channel.name = "🟢";
    progressFields.commands.name = "🟢";
    progressFields.complete.name = "🟢";
    break;

  case "rolesFailed":
    progressFields.roles.name = "🔴";
    break;

  default:
    progressFields.roles.name = "🟡";
    break;
  }

  // Return the name and value object for each embed field as an array needed to create embed
  return Object.values(progressFields);
};
