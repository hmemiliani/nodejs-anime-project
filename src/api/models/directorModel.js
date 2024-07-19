const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.join(__dirname, '..', '..', 'data', 'directors.json');

async function getDirectors() {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        return JSON.parse(data).directors;
    } catch (error) {
        throw new Error('Error al leer los datos de directores');
    }
}

async function saveDirectors(data) {
    try {
        const stringData = JSON.stringify({ directors: data }, null, 2);
        await fs.writeFile(FILE_PATH, stringData, 'utf8');
    } catch (error) {
        throw new Error('Error al guardar los datos de directores');
    }
}

module.exports = {
    getDirectors,
    saveDirectors
};
