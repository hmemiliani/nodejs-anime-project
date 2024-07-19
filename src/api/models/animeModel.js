const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.join(__dirname, '..', '..', 'data', 'animes.json');

async function getAnimes() {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        return JSON.parse(data).animes;
    } catch (error) {
        throw new Error('Error al leer los datos de animes');
    }
}

async function saveAnimes(data) {
    try {
        const stringData = JSON.stringify({ animes: data }, null, 2);
        await fs.writeFile(FILE_PATH, stringData, 'utf8');
    } catch (error) {
        throw new Error('Error al guardar los datos de animes');
    }
}

module.exports = {
    getAnimes,
    saveAnimes
};