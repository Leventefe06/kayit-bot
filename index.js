const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// MongoDB bağlantısı (örnek)
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB bağlandı!'))
  .catch(err => console.error('MongoDB hatası:', err));

client.on('ready', () => {
  console.log(`${client.user.tag} çalışıyor!`);
});

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('.kayıt')) {
    // Kayıt işlemleri burada
  }
});

client.login(process.env.TOKEN);
require('./keep_alive'); // Replit 7/24 aktif tutma
