const directorModel = require('../models/directorModel');

exports.createDirector = async (req, res) => {
    try {
        const directors = await directorModel.getDirectors();
        const newId = directors.length > 0 ? Math.max(...directors.map(director => director.id)) + 1 : 1;
        const newDirector = {
            id: newId,
            ...req.body
        };
        directors.push(newDirector);
        await directorModel.saveDirectors(directors);
        res.status(201).send({ message: 'Director creado exitosamente', director: newDirector });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el director', error: error.message });
    }
};

exports.getAllDirectors = async (req, res) => {
    const directors = await directorModel.getDirectors();
    res.status(200).send(directors);
};

exports.getDirectorById = async (req, res) => {
    const directors = await directorModel.getDirectors();
    const director = directors.find(d => d.id === parseInt(req.params.id));
    if (director) {
        res.status(200).send(director);
    } else {
        res.status(404).send({ message: 'Director no encontrado' });
    }
};

exports.updateDirector = async (req, res) => {
    const directors = await directorModel.getDirectors();
    const index = directors.findIndex(d => d.id === parseInt(req.params.id));
    if (index !== -1) {
        directors[index] = { ...directors[index], ...req.body };
        await directorModel.saveDirectors(directors);
        res.status(200).send({ message: 'Director actualizado exitosamente', director: directors[index] });
    } else {
        res.status(404).send({ message: 'Director no encontrado' });
    }
};

exports.deleteDirector = async (req, res) => {
    const directors = await directorModel.getDirectors();
    const filteredDirectors = directors.filter(d => d.id !== parseInt(req.params.id));
    if (filteredDirectors.length !== directors.length) {
        await directorModel.saveDirectors(filteredDirectors);
        res.status(200).send({ message: 'Director eliminado exitosamente' });
    } else {
        res.status(404).send({ message: 'Director no encontrado' });
    }
};
