const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.join(__dirname, '..', '..', 'data', 'characters.json');

async function getCharacters() {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        return JSON.parse(data).characters;
    } catch (error) {
        throw new Error('Error al leer los datos de personajes');
    }
}

async function saveCharacters(data) {
    try {
        const stringData = JSON.stringify({ characters: data }, null, 2);
        await fs.writeFile(FILE_PATH, stringData, 'utf8');
    } catch (error) {
        throw new Error('Error al guardar los datos de personajes');
    }
}

module.exports = {
    getCharacters,
    saveCharacters
};
