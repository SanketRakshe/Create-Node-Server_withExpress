const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'Hey! There is a server Responce!!!' });
})

module.exports = {
    app
}