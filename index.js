const discord = require("discord.js");
const client = new discord.Client({ intents: 32767 });
const { MessageEmbed } = require("discord.js");
const { QuickDB } = require("quick.db");
const config = require("./config.js");
const db = new QuickDB();

const embed = new MessageEmbed()
    .setTitle("Reactions")
    .setDescription("React to this messages Reactions to gain cool roles!")
    .setColor("GREEN")
    .setFooter({ text: "Made with ❤️ by JanjyTapYT#0001 & Stoneclane Development | Open Source: https://github.com/Stoneclane-Development/Reaction-Roles-Bot", iconURL: "https://cdn.discordapp.com/avatars/881000000000000000/00000000000000000000000000000000.png?size=1024" });

client.on("ready", () => {
    console.log("✅ | Bot is ready!");
    client.user.setActivity(config.status.activity, { type: config.status.type });

    if (!db.get("send") === true) {
        const channel_config = client.channels.cache.get(config.env.channel);
        channel_config.send({ embeds: [embed] }).then((msg) => {
        config.roles.forEach((role) => {
            msg.react(role.emoji);
        });
    });
  ///////////////////////////////////////////////////////////
  // Dont remove this otherwise you will break everything! //
                   db.set("send", true);                   //
  ///////////////////////////////////////////////////////////
    } else {
        const channel_config = client.channels.cache.get(config.env.channel);
        channel_config.messages.fetch(config.env.message).then((msg) => {
            msg.edit({ embeds: [embed] });
            config.roles.forEach((role) => {
                msg.react(role.emoji);
            });
        });
    }
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (user.bot) return;
    if (reaction.partial) await reaction.fetch();
    if (reaction.message.partial) await reaction.message.fetch();
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == config.env.channel) {
        config.roles.forEach((role) => {
            if (reaction.emoji.name == role.emoji) {
                const role_config = reaction.message.guild.roles.cache.get(role.id);
                const member = reaction.message.guild.members.cache.get(user.id);
                member.roles.add(role_config);
            }
        });
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if (user.bot) return;
    if (reaction.partial) await reaction.fetch();
    if (reaction.message.partial) await reaction.message.fetch();
    if (!reaction.message.guild) return;
    
    if (reaction.message.channel.id == config.env.channel) {
        config.roles.forEach((role) => {
            if (reaction.emoji.name == role.emoji) {
                const role_config = reaction.message.guild.roles.cache.get(role.id);
                const member = reaction.message.guild.members.cache.get(user.id);
                member.roles.remove(role_config);
            }
        });
    }
});

client.login(config.env.token);
