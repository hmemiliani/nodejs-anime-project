const studioModel = require('../models/studioModel');

exports.createStudio = async (req, res) => {
    try {
        const studios = await studioModel.getStudios();
        const newId = studios.length > 0 ? Math.max(...studios.map(studio => studio.id)) + 1 : 1;
        const newStudio = {
            id: newId,
            ...req.body
        };
        studios.push(newStudio);
        await studioModel.saveStudios(studios);
        res.status(201).send({ message: 'Estudio creado exitosamente', studio: newStudio });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el estudio', error: error.message });
    }
};

exports.getAllStudios = async (req, res) => {
    const studios = await studioModel.getStudios();
    res.status(200).send(studios);
};

exports.getStudioById = async (req, res) => {
    const studios = await studioModel.getStudios();
    const studio = studios.find(s => s.id === parseInt(req.params.id));
    if (studio) {
        res.status(200).send(studio);
    } else {
        res.status(404).send({ message: 'Estudio no encontrado' });
    }
};

exports.updateStudio = async (req, res) => {
    const studios = await studioModel.getStudios();
    const index = studios.findIndex(s => s.id === parseInt(req.params.id));
    if (index !== -1) {
        studios[index] = { ...studios[index], ...req.body };
        await studioModel.saveStudios(studios);
        res.status(200).send({ message: 'Estudio actualizado exitosamente', studio: studios[index] });
    } else {
        res.status(404).send({ message: 'Estudio no encontrado' });
    }
};

exports.deleteStudio = async (req, res) => {
    const studios = await studioModel.getStudios();
    const filteredStudios = studios.filter(s => s.id !== parseInt(req.params.id));
    if (filteredStudios.length !== studios.length) {
        await studioModel.saveStudios(filteredStudios);
        res.status(200).send({ message: 'Estudio eliminado exitosamente' });
    } else {
        res.status(404).send({ message: 'Estudio no encontrado' });
    }
};
