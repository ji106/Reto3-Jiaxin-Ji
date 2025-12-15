const express = require('express');
const router = express.Router();
const gestorDatos = require('../utils/gestorDatos');

router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

router.post('/login', (req, res) => {
    const { usuario, clave } = req.body;
    const usuarioEncontrado = gestorDatos.buscarUsuario(usuario, clave);
    
    if (!usuarioEncontrado) {
        return res.render('login', { error: 'Usuario o contraseña incorrectos' }); 
    }

    req.session.usuario = usuarioEncontrado;
    res.redirect('/peliculas');
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

module.exports = router;