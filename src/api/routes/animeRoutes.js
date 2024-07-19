const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');

//crear un nuevo anime
router.post('/', animeController.createAnime);

//mostrar todos
router.get('/', animeController.getAllAnimes);

//un anime por ID
router.get('/:id', animeController.getAnimeById);

//update anime por ID
router.put('/:id', animeController.updateAnime);

//eliminar un anime
router.delete('/:id', animeController.deleteAnime);

module.exports = router;