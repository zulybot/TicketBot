const { MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow, Command } = require("gcommands");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "sendpanel",
      description: "Send panel :O",
      guildOnly: "880174783294214184",
      userRequiredPermissions: "ADMINISTRATOR",   
    })
  }

  async run({client, channel, respond}) {
    let embed = new MessageEmbed()
      .setTitle(`<:zu_ticket:890950181120507935> Atendimento | ${client.user.username}`)
      .setDescription('> Para criar um ticket clique no botão abaixo')
      .setColor('BLUE')

    let button = new MessageButton()
      .setEmoji("📩")
      .setLabel("Criar Ticket")
      .setStyle("blurple")
      .setCustomId("support_ticket_create")

    respond({
      content: "Sended!",
      ephemeral: true
    })

    channel.send({
      content: embed,
      inlineReply: false,
      components: new MessageActionRow().addComponents([button])
    })
  }
};
