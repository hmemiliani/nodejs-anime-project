// Funciones CRUD para personajes
exports.createCharacter = (req, res) => {
    res.status(201).send({ message: 'Personaje creado exitosamente', character: req.body });
};

exports.getAllCharacters = (req, res) => {
    res.status(200).send({ message: 'Lista de personajes' });
};

exports.getCharacterById = (req, res) => {
    res.status(200).send({ message: 'Detalle del personaje', id: req.params.id });
};

exports.updateCharacter = (req, res) => {
    res.status(200).send({ message: 'Personaje actualizado', id: req.params.id });
};

exports.deleteCharacter = (req, res) => {
    res.status(200).send({ message: 'Personaje eliminado', id: req.params.id });
};
