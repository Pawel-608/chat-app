const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '/../', 'public');
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
    console.log('New user just connected');

    socket.on('createMessage', msg => {
        console.log(msg);
    })

    socket.on('disconnect', socket => {
        console.log('New user just disonnected');
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`listen on port: ${PORT}`);
});