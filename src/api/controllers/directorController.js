exports.createDirector = (req, res) => {
    res.status(201).send({ message: 'Director creado exitosamente', director: req.body });
};

exports.getAllDirectors = (req, res) => {
    res.status(200).send({ message: 'Lista de directores' });
};

exports.getDirectorById = (req, res) => {
    res.status(200).send({ message: 'Detalle del director', id: req.params.id });
};

exports.updateDirector = (req, res) => {
    res.status(200).send({ message: 'Director actualizado', id: req.params.id });
};

exports.deleteDirector = (req, res) => {
    res.status(200).send({ message: 'Director eliminado', id: req.params.id });
};
