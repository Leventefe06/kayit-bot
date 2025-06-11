// keep_alive.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Discord Bot Aktif!');
});

app.listen(PORT, () => {
  console.log(`Keep-Alive sunucusu ${PORT} portunda çalışıyor.`);
});
