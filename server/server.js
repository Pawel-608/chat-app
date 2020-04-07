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
        // console.log(msg);

        socket.emit('newMessage', {
            from: "admin",
            text: "Welcome to the chat app!",
            createdAt: new Date().getTime()
        });
        socket.broadcast.emit('newMessage', {
            from: "admin",
            text: "New user join",
            createdAt: new Date().getTime()
        });

        // socket.broadcast.emit('newMsg', { 
        //         from: msg.from,
        //         text: msg.text,
        //         createdAt: new Date().getTime()
        //     });// EVERYBODT (WITHOUT EMMITER) WILL GET THIS MSG
        // io.emit('newMsg', { 
        //     from: msg.from,
        //     text: msg.text,
        //     createdAt: new Date().getTime()
        //  });// SEND TO ALL USERS
    });

    // socket.emit('newMsg', { from: "WDJ", text: "What's going on?" });// SEND TO 1 USER

    socket.on('disconnect', socket => {
        console.log('User just disonnected');
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`listen on port: ${PORT}`);
});