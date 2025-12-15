const fs = require('fs');
const path = require('path');

function obtenerUsuarios() {
    const ruta = path.join(__dirname, '../data/users.json');
    return JSON.parse(fs.readFileSync(ruta, 'utf8'));
}

function obtenerPeliculas() {
    const ruta = path.join(__dirname, '../data/movies.json');
    return JSON.parse(fs.readFileSync(ruta, 'utf8'));
}

function buscarUsuario(usuario, clave) {
    const usuarios = obtenerUsuarios();
    return usuarios.find(u => u.username === usuario && u.password === clave);
}

function obtenerPeliculaPorId(id) {
    const peliculas = obtenerPeliculas();
    return peliculas.find(p => p.id == id);
}

module.exports = {
    obtenerUsuarios,
    obtenerPeliculas,
    buscarUsuario,
    obtenerPeliculaPorId
}