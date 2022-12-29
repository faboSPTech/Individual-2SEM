const express = require("express");
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.resolve('./GREENEYE-OFICIAL/public/view/index.html'));
})

router.get('/login', (req, res) => {
    res.sendFile(path.resolve('./GREENEYE-OFICIAL/public/view/login.html'));
})

router.get('/cadEmpresa', (req, res) => {
    res.sendFile(path.resolve('./GREENEYE-OFICIAL/public/view/cadEmpresa.html'));
})

router.get('/cadastrar', (req, res) => {
    res.sendFile(path.resolve('./GREENEYE-OFICIAL/public/view/cadUsuarios.html'));
})

router.get('/cadLote', (req, res) => {
    res.sendFile(path.resolve('./GREENEYE-OFICIAL/public/view/cadLote.html'));
})

router.get('/cadMaquina', (req, res) => {
    res.sendFile(path.resolve('./GREENEYE-OFICIAL/public/view/cadMaquina.html'));
})

router.get('/cadEspecificacao', (req, res) => {
    res.sendFile(path.resolve('./GREENEYE-OFICIAL/public/view/cadLote.html#especificacoes'));
})

router.get('/contato', (req, res) => {
    res.sendFile(path.resolve('./GREENEYE-OFICIAL/public/view//index.html#contact'));
})


router.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve('../GREENEYE-OFICIAL/public/view/dashboard.html'));
})

module.exports = router;