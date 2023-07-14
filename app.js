const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(process.env.PORT, () =>{
    console.log('Servidor escuchando en el puerto ' + process.env.PORT + ' https://localhost:3001');
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/Cre%C3%A1%20tu%20cuenta', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/Ingres%C3%A1', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});


