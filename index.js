const discord = require("discord.js");
const client = new discord.Client({ intents: 32767 });
const { MessageEmbed } = require("discord.js");
const { QuickDB } = require("quick.db");
const config = require("./config.js");
const db = new QuickDB();

const row = new discord.MessageActionRow()
    config.buttons.forEach((button) => {
        row.addComponents(
            new discord.MessageButton()
                .setCustomId(button.id)
                .setLabel(button.label)
                .setStyle(button.style)
                .setEmoji(button.emoji)
        );
    });

const embed = new MessageEmbed()
    .setTitle("Reaction Buttons")
    .setDescription("Press the buttons of this message to gain cool roles!")
    .setColor("GREEN")
    .setFooter({ text: "Made with ❤️ by JanjyTapYT#0001 & Stoneclane Development | Open Source: https://github.com/Stoneclane-Development/Reaction-Roles-Bot", iconURL: "https://cdn.discordapp.com/avatars/881000000000000000/00000000000000000000000000000000.png?size=1024" });

client.on("ready", () => {
    console.log("✅ | Bot is ready!");
    client.user.setActivity(config.status.activity, { type: config.status.type });

    if (!db.get("send") === true) {
        const channel_config = client.channels.cache.get(config.env.channel);
        channel_config.send({ embeds: [embed], components: [row] }).then((msg) => {
            db.set("send", true);
            db.set(`message_` + msg.id, msg.id);
        })
    } else {
        const channel_config = client.channels.cache.get(config.env.channel);
        channel_config.messages.fetch(config.env.message).then((msg) => {
            msg.edit({ embeds: [embed], components: [row] });
        });
    }
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) return;
    config.buttons.forEach((button) => {

        if (interaction.customId === button.id) {
            if (interaction.member.roles.cache.has(button.role)) {
                interaction.member.roles.remove(button.role);
                interaction.reply({ embeds: [
                    new MessageEmbed()
                        .setTitle("✅ Successfull!")
                        .setDescription(`You have successfully removed the role <@&${button.role}> from yourself!`)
                        .setColor("GREEN")
                        .setFooter({ text: "Made with ❤️ by JanjyTapYT#0001 & Stoneclane Development" })
                ], ephemeral: true });
            } else {
                interaction.member.roles.add(button.role);
                interaction.reply({ embeds: [
                    new MessageEmbed()
                        .setTitle("✅ Successfull!")
                        .setDescription(`You have successfully added the role <@&${button.role}> to yourself!`)
                        .setColor("GREEN")
                        .setFooter({ text: "Made with ❤️ by JanjyTapYT#0001 & Stoneclane Development" })
                ], ephemeral: true });
            }
        }
    });
});

client.login(config.env.token);