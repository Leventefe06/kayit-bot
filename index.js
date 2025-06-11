const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.once("ready", () => {
  console.log(`${client.user.tag} aktif!`);
});

client.on("guildMemberAdd", member => {
  const kanal = member.guild.systemChannel;
  if (kanal) {
    kanal.send(`Hoş geldin ${member}, sunucumuza katıldığın için mutluyuz!`);
  }
});

client.login(process.env.TOKEN);
