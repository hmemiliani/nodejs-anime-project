const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.join(__dirname, '..', '..', 'data', 'studios.json');

async function getStudios() {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        return JSON.parse(data).studios;
    } catch (error) {
        throw new Error('Error al leer los datos de estudios');
    }
}

async function saveStudios(data) {
    try {
        const stringData = JSON.stringify({ studios: data }, null, 2);
        await fs.writeFile(FILE_PATH, stringData, 'utf8');
    } catch (error) {
        throw new Error('Error al guardar los datos de estudios');
    }
}

module.exports = {
    getStudios,
    saveStudios
};
