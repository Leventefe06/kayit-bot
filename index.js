const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Bot aktif: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.content === "!merhaba") {
    message.reply("Selam! Ben çalışıyorum 🎉");
  }
});

client.login(process.env.TOKEN); // Token'i Replit Secrets'a ekleyin
require('./keep_alive'); // keep_alive.js'i çalıştırır
