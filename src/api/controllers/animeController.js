const animeModel = require('../models/animeModel');

exports.createAnime = async (req, res) => {
    try {
        const animes = await animeModel.getAnimes();
        const newId = animes.length > 0 ? Math.max(...animes.map(anime => anime.id)) + 1 : 1;
        const newAnime = {
            id: newId,
            ...req.body
        };
        animes.push(newAnime);
        await animeModel.saveAnimes(animes);
        res.status(201).send({ message: 'Anime creado exitosamente', anime: newAnime });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el anime', error: error.message });
    }
};

exports.getAllAnimes = async (req, res) => {
    const animes = await animeModel.getAnimes();
    res.status(200).send(animes);
};

exports.getAnimeById = async (req, res) => {
    const animes = await animeModel.getAnimes();
    const anime = animes.find(a => a.id === parseInt(req.params.id));
    if (anime) {
        res.status(200).send(anime);
    } else {
        res.status(404).send({ message: 'Anime no encontrado' });
    }
};

exports.updateAnime = async (req, res) => {
    const animes = await animeModel.getAnimes();
    const index = animes.findIndex(a => a.id === parseInt(req.params.id));
    if (index !== -1) {
        animes[index] = { ...animes[index], ...req.body };
        await animeModel.saveAnimes(animes);
        res.status(200).send({ message: 'Anime actualizado exitosamente', anime: animes[index] });
    } else {
        res.status(404).send({ message: 'Anime no encontrado' });
    }
};

exports.deleteAnime = async (req, res) => {
    const animes = await animeModel.getAnimes();
    const filteredAnimes = animes.filter(a => a.id !== parseInt(req.params.id));
    if (filteredAnimes.length !== animes.length) {
        await animeModel.saveAnimes(filteredAnimes);
        res.status(200).send({ message: 'Anime eliminado exitosamente' });
    } else {
        res.status(404).send({ message: 'Anime no encontrado' });
    }
};
