const app = require('./app'); // Importa las configuraciones de Express desde app.js
const port = process.env.PORT || 3000; // puerto

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
