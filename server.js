const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/public')); // Sirve los archivos en "public"

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
