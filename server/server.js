const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '/../', 'public');
const app = express();

app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listen on port: ${PORT}`);
});