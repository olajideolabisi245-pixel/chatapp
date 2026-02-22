const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public')); // Tells the server where your HTML is

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    io.emit('message', msg); // Send message to everyone
  });
});

http.listen(3000, () => console.log('Listening on port 3000'));
