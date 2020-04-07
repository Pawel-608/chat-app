let socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    // socket.emit('createMsg', { from: "WDJ", text: "What's going on?" })
});
socket.on('disconnect', () => {
     console.log('disconnet to server');
});

socket.on('newMessage', msg => {
    console.log(msg);
})