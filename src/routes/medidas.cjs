// var express = require("express");
// var router = express.Router();

// var medidaController = require("../controllers/medidaController.cjs");

// router.get("/ultimas/:idArmazem", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idArmazem", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

// module.exports = router;

var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController.cjs");

router.get("/ultimas/:valorId", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idCPU", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimasRAM/:idRAM", function (req, res) {
    medidaController.buscarUltimasMedidasRAM(req, res);
});

router.get("/tempo-realRAM/:idRealRAM", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAM(req, res);
})

router.get("/ultimasTEMP/:idTEMP", function (req, res) {
    medidaController.buscarUltimasMedidasTEMP(req, res);
});

router.get("/tempo-realTEMP/:idRealTEMP", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTEMP(req, res);
})

router.get("/ultimasTEMP1/:idTEMP", function (req, res) {
    medidaController.buscarUltimasMedidasTEMP1(req, res);
});

router.get("/tempo-realTEMP1/:idRealTEMP", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTEMP1(req, res);
})

router.get("/ultimasTEMPMK1/:idTEMP", function (req, res) {
    medidaController.buscarUltimasMedidasTEMPMK1(req, res);
});

router.get("/tempo-realTEMPMK1/:idRealTEMP", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTEMPMK1(req, res);
})

router.get("/ultimasTEMPMK2/:idTEMP", function (req, res) {
    medidaController.buscarUltimasMedidasTEMPMK2(req, res);
});

router.get("/tempo-realTEMPMK2/:idRealTEMP", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTEMPMK2(req, res);
})

router.get("/ultimasTEMPMK3/:idTEMP", function (req, res) {
    medidaController.buscarUltimasMedidasTEMPMK3(req, res);
});

router.get("/tempo-realTEMPMK3/:idRealTEMP", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTEMPMK3(req, res);
})

router.get("/ultimasTEMPMK4/:idTEMP", function (req, res) {
    medidaController.buscarUltimasMedidasTEMPMK4(req, res);
});

router.get("/tempo-realTEMPMK4/:idRealTEMP", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTEMPMK4(req, res);
})

router.get("/ultimasTempMax/", function (req, res) {
    medidaController.TempMax(req, res);
});

router.get("/ultimasTempMin/", function (req, res) {
    medidaController.TempMin(req, res);
});

router.get("/ultimasTempMax1/", function (req, res) {
    medidaController.TempMax1(req, res);
});

router.get("/ultimasTempMin1/", function (req, res) {
    medidaController.TempMin1(req, res);
});

router.get("/ultimasTempMax2/", function (req, res) {
    medidaController.TempMax2(req, res);
});

router.get("/ultimasTempMin2/", function (req, res) {
    medidaController.TempMin2(req, res);
});

router.get("/ultimasTempMax3/", function (req, res) {
    medidaController.TempMax3(req, res);
});

router.get("/ultimasTempMin3/", function (req, res) {
    medidaController.TempMin3(req, res);
});

router.get("/ultimaDisco/:idArmazem", function (req, res) {
    medidaController.buscarUltimaMedidaDisco(req, res);
})

router.get("/ultimasRotulos/:idRotulos", function (req, res) {
    medidaController.UltimasMedidasRotulos(req, res);
});

router.get("/ultimasFases/:idFases", function (req, res) {
    medidaController.UltimasMedidasFases(req, res);
});

router.get("/ultimasPrincipais/:idPrincipais", function (req, res) {
    medidaController.UltimasMedidasPrincipais(req, res);
});

router.get("/ultimasGerais/:idGerais", function (req, res) {
    medidaController.UltimasMedidasGerais(req, res);
});

router.get("/dashlucas/:idTriagem", function (req, res) {
    medidaController.dashlucas(req, res);
});

router.get("/cardlucas/:idTot", function (req, res) {
    medidaController.cardlucas(req, res);
});

router.get("/buscarProc/:fkMaquina", function (req, res) {
    medidaController.buscarProc(req, res);
})

router.get("/procCPU", function (req, res) {
    medidaController.procCPU(req, res);
});

router.get("/procRAM", function (req, res) {
    medidaController.procRAM(req, res);
});

router.get("/lotethais/:idLote", function (req, res) {
    medidaController.lotethais(req, res);
});



module.exports = router;