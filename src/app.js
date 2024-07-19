const express = require('express');
const animeRoutes = require('./api/routes/animeRoutes');
const studioRoutes = require('./api/routes/studioRoutes');
const directorRoutes = require('./api/routes/directorRoutes');
const characterRoutes = require('./api/routes/characterRoutes');

const app = express();

app.use(express.json()); // Middleware para parsear JSON

app.get('/', (req, res) => {
    res.send('Hello World! Harold,  this is working');
});

app.use('/animes', animeRoutes)

app.use('/studios', studioRoutes);

app.use('/directors', directorRoutes);

app.use('/characters', characterRoutes);


module.exports = app;
