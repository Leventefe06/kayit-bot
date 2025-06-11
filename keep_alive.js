// Replit'te botun uykuya geçmesini engeller
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Bot aktif!");
});
server.listen(3000);
