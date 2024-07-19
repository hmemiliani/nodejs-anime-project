exports.createStudio = (req, res) => {
    res.status(201).send({ message: 'Estudio creado exitosamente', studio: req.body });
};


exports.getAllStudios = (req, res) => {
    res.status(200).send({ message: 'Lista de estudios' });
};


exports.getStudioById = (req, res) => {
    res.status(200).send({ message: 'Detalle del estudio', id: req.params.id });
};


exports.updateStudio = (req, res) => {
    res.status(200).send({ message: 'Estudio actualizado', id: req.params.id });
};


exports.deleteStudio = (req, res) => {
    res.status(200).send({ message: 'Estudio eliminado', id: req.params.id });
};