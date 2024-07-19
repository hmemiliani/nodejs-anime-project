const characterModel = require('../models/characterModel');

exports.createCharacter = async (req, res) => {
    try {
        const characters = await characterModel.getCharacters();
        const newId = characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 1;
        const newCharacter = {
            id: newId,
            ...req.body
        };
        characters.push(newCharacter);
        await characterModel.saveCharacters(characters);
        res.status(201).send({ message: 'Personaje creado exitosamente', character: newCharacter });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el personaje', error: error.message });
    }
};

exports.getAllCharacters = async (req, res) => {
    const characters = await characterModel.getCharacters();
    res.status(200).send(characters);
};

exports.getCharacterById = async (req, res) => {
    const characters = await characterModel.getCharacters();
    const character = characters.find(c => c.id === parseInt(req.params.id));
    if (character) {
        res.status(200).send(character);
    } else {
        res.status(404).send({ message: 'Personaje no encontrado' });
    }
};

exports.updateCharacter = async (req, res) => {
    const characters = await characterModel.getCharacters();
    const index = characters.findIndex(c => c.id === parseInt(req.params.id));
    if (index !== -1) {
        characters[index] = { ...characters[index], ...req.body };
        await characterModel.saveCharacters(characters);
        res.status(200).send({ message: 'Personaje actualizado exitosamente', character: characters[index] });
    } else {
        res.status(404).send({ message: 'Personaje no encontrado' });
    }
};

exports.deleteCharacter = async (req, res) => {
    const characters = await characterModel.getCharacters();
    const filteredCharacters = characters.filter(c => c.id !== parseInt(req.params.id));
    if (filteredCharacters.length !== characters.length) {
        await characterModel.saveCharacters(filteredCharacters);
        res.status(200).send({ message: 'Personaje eliminado exitosamente' });
    } else {
        res.status(404).send({ message: 'Personaje no encontrado' });
    }
};
