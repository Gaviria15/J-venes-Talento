const express = require('express');
const path = require('path');
const app = express();

const port = 6543;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hola");
});

app.get('/sesiones', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/sesiones.html'));
});

app.get('/retos', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/retos.html'));
});

app.get('/miAgenda', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/miAgenda.html'));
});

// Puedes agregar más rutas según sea necesario

app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
