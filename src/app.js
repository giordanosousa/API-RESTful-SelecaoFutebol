const express = require('express');
const app = express();
const Port = 3000;

app.get('/', (req, res) => {
    res.send('Olá Mundo')
});

app.listen(Port, () => {
    console.log(`servidor rodando com sucesso: ${Port}`)
});