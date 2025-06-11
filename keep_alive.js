const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot aktif 🚀');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Keep alive server çalışıyor. Port: ${port}`);
});
