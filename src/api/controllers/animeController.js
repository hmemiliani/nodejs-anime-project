//recordatorio pa mi, agregar el modulo cuando lo tenga
const animeModel = require('../models/animeModel')

exports.createAnime = async (req, res) => {
    try {
        const animes = await animeModel.getAnimes();
        const newAnime = {
            id: animes.length + 1,
            ...req.body
        };
        animes.push(newAnime);
        await animeModel.saveAnimes(animes);
        res.status(201).send({ message: 'Anime creado exitosamente', anime: newAnime });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el anime' });
    }
};

exports.getAllAnimes = (req, res) => {
    res.status(200).send({ message: 'Lista de animes' });
};

exports.getAnimeById = (req, res) => {
    res.status(200).send({ message: 'Detalle del anime', id: req.params.id });
};

exports.updateAnime = (req, res) => {
    res.status(200).send({ message: 'Anime actualizado', id: req.params.id });
};

exports.deleteAnime = (req, res) => {
    res.status(200).send({ message: 'Anime eliminado', id: req.params.id });
};