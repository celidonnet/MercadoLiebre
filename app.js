const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(process.env.PORT, () =>{
    console.log('Servidor escuchando en el puerto ' + process.env.PORT + ' https://localhost:' + process.env.PORT);
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});


