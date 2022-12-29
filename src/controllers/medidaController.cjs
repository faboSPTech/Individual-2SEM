var medidaModel = require("../models/medidaModel.cjs");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarUltimasMedidasRAM(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasRAM(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealRAM(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealRAM(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealTEMP(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealTEMP(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasTEMP(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasTEMP(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealTEMP1(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealTEMP1(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasTEMP1(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasTEMP1(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealTEMPMK1(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealTEMPMK1(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealTEMPMK2(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealTEMPMK2(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealTEMPMK3(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealTEMPMK3(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealTEMPMK4(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealTEMPMK4(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarUltimasMedidasTEMPMK1(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasTEMPMK1(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasTEMPMK2(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasTEMPMK2(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasTEMPMK3(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasTEMPMK3(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasTEMPMK4(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasTEMPMK4(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function TempMax(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempMax().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function TempMin(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempMin().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function TempMax1(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempMax1().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function TempMin1(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempMin1().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function TempMax2(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempMax2().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function TempMin2(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempMin2().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function TempMax3(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempMax3().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function TempMin3(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempMin3().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarUltimaMedidaDisco(req, res){
    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimaMedidaDisco(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function  UltimasMedidasRotulos(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel. UltimasMedidasRotulos(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function  UltimasMedidasFases(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel. UltimasMedidasFases(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function  UltimasMedidasPrincipais(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel. UltimasMedidasPrincipais(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function  UltimasMedidasGerais(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.UltimasMedidasGerais(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dashlucas(req, res) {

    var idTriagem = req.params.idTriagem;
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.dashlucas(idTriagem).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cardlucas(req, res) {

    var idTot = req.params.idTriagem;
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.cardlucas(idTot).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// listar processos
function buscarProc(req, res){
    
    var fkMaquina = req.params.fkMaquina;
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarProc(fkMaquina).then(function (resultado) {
        if(resultado.length > 0) {
            res.json(resultado);
        } else{
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// listar top3 processos CPU%
function procCPU(req, res) {

    // var fkMaquina = req.params.fkMaquina;
    // console.log(`Recuperando medidas em tempo real`);

    medidaModel.procCPU().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// listar top3 processos RAM%
function procRAM(req, res) {

    medidaModel.procRAM().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function lotethais(req, res){

    var idLote = req.params.idLote;

    console.log(`Recuperando medidas em tempo real`);
    console.log(idLote)
    medidaModel.lotethais(idLote).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidasRAM,
    buscarMedidasEmTempoRealRAM,
    buscarMedidasEmTempoRealTEMP,
    buscarUltimasMedidasTEMP,
    buscarMedidasEmTempoRealTEMP1,
    buscarUltimasMedidasTEMP1,
    buscarMedidasEmTempoRealTEMPMK1,
    buscarMedidasEmTempoRealTEMPMK2,
    buscarMedidasEmTempoRealTEMPMK3,
    buscarMedidasEmTempoRealTEMPMK4,
    buscarUltimasMedidasTEMPMK1,
    buscarUltimasMedidasTEMPMK2,
    buscarUltimasMedidasTEMPMK3,
    buscarUltimasMedidasTEMPMK4,
    UltimasMedidasRotulos,
    buscarUltimaMedidaDisco,
    UltimasMedidasFases,
    UltimasMedidasPrincipais,
    UltimasMedidasGerais,
    dashlucas,
    cardlucas,
    TempMax,
    TempMin,
    TempMax1,
    TempMin1,
    TempMax2,
    TempMin2,
    TempMax3,
    TempMin3,
    buscarProc,
    procCPU,
    procRAM,
    lotethais
}