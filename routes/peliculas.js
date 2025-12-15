const express = require('express');
const router = express.Router();
const gestorDatos = require('../utils/gestorDatos');

function comprobarSesion(req, res, next) {
    if (!req.session.usuario) {
        return res.redirect('/login');
    }
    next();
}

router.get('/', comprobarSesion, (req, res) => {
    const peliculas = gestorDatos.obtenerPeliculas();
    res.render('listadoPeliculas', { peliculas });
});

router.get('/:id', comprobarSesion, (req, res) => {
    const pelicula = gestorDatos.obtenerPeliculaPorId(req.params.id);

    if (!pelicula) {
        return res.status(404).send('Película no encontrada');
    }

    res.render('detallePelicula', { pelicula });
});

module.exports = router;