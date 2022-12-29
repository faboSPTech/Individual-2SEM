var database = require("../database/config.cjs");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 cpuMedia, dataHora, convert(varchar, dataHora, 108) as horarioF from Leitura order by idLeitura desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        date_format(momento, '%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit ${limite_linhas}` */
            instrucaoSql = `select cpuMedia, ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF from Leitura order by idLeitura desc limit ${limite_linhas}`;
        // instrucaoSql = 

        // `select cpuMedia, ramUsoPercent, 
        //  date_format(dataHora, '%H:%i:%s') as momento_grafico 
        //  from Leitura 
        //  order by date_format(dataHora, '%H:%i:%s') limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasRAM(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 ramUsoPercent, dataHora, convert(varchar, dataHora, 108) as horarioF from Leitura order by idLeitura desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
    REGISTRO_TEMP, 
    REGISTRO_UMID, 
    REGISTRO_MOMENTO,
    date_format(momento, '%H:%i:%s') as momento_grafico
from registros  
order by idRegistros desc limit ${limite_linhas}` */

            `select cpuMedia, ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF from Leitura order by idLeitura desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 cpuMedia, dataHora, convert(varchar, dataHora, 108) as horarioF from Leitura order by idLeitura desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select cpuMedia, ramUsoPercent dataHora, date_format(dataHora, '%H:%i') as horarioF 
    from Leitura order by idLeitura desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealRAM(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 ramUsoPercent, dataHora, convert(varchar, dataHora, 108) as horarioF from Leitura order by idLeitura desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF 
    from Leitura order by idLeitura desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasTEMP(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina between 50000 and 50003 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
    REGISTRO_TEMP, 
    REGISTRO_UMID, 
    REGISTRO_MOMENTO,
    date_format(momento, '%H:%i:%s') as momento_grafico
from registros  
order by idRegistros desc limit ${limite_linhas}` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina between 50000 and 50003 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTEMP(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina between 50000 and 50003 order by id desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina between 50000 and 50003 order by id desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasTEMP1(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina between 50001 and 50004 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
    REGISTRO_TEMP, 
    REGISTRO_UMID, 
    REGISTRO_MOMENTO,
    date_format(momento, '%H:%i:%s') as momento_grafico
from registros  
order by idRegistros desc limit ${limite_linhas}` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina between 50001 and 50004 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTEMP1(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina between 50001 and 50004 order by id desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina between 50001 and 50004 order by id desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidasTEMPMK1(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina = 50000 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
    REGISTRO_TEMP, 
    REGISTRO_UMID, 
    REGISTRO_MOMENTO,
    date_format(momento, '%H:%i:%s') as momento_grafico
from registros  
order by idRegistros desc limit ${limite_linhas}` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina = 50000 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTEMPMK1(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina = 50000 order by id desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina = 50000 order by id desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasTEMPMK2(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina = 50003 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
    REGISTRO_TEMP, 
    REGISTRO_UMID, 
    REGISTRO_MOMENTO,
    date_format(momento, '%H:%i:%s') as momento_grafico
from registros  
order by idRegistros desc limit ${limite_linhas}` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina = 50003 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTEMPMK2(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina = 50003 order by id desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina = 50003 order by id desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasTEMPMK3(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina = 50001 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
    REGISTRO_TEMP, 
    REGISTRO_UMID, 
    REGISTRO_MOMENTO,
    date_format(momento, '%H:%i:%s') as momento_grafico
from registros  
order by idRegistros desc limit ${limite_linhas}` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina = 50001 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTEMPMK3(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina = 50001 order by id desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina = 50001 order by id desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasTEMPMK4(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina = 50004 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
    REGISTRO_TEMP, 
    REGISTRO_UMID, 
    REGISTRO_MOMENTO,
    date_format(momento, '%H:%i:%s') as momento_grafico
from registros  
order by idRegistros desc limit ${limite_linhas}` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina = 50004 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTEMPMK4(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura where fkMaquina = 50004 order by id desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura where fkMaquina = 50004 order by id desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function TempMax() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select top 12 tempMax from Temperatura where fkMaquina = 50000 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select tempMax from Temperatura where fkMaquina = 50000 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function TempMin() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select top 12 tempMin from Temperatura where fkMaquina = 50000 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select tempMin from Temperatura where fkMaquina = 50000 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function TempMax1() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select top 12 tempMax from Temperatura where fkMaquina = 50003 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select tempMax from Temperatura where fkMaquina = 50003 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function TempMin1() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select top 12 tempMin from Temperatura where fkMaquina = 50003 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select tempMin from Temperatura where fkMaquina = 50003 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function TempMax2() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select top 12 tempMax from Temperatura where fkMaquina = 50001 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select tempMax from Temperatura where fkMaquina = 50001 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function TempMin2() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select top 12 tempMin from Temperatura where fkMaquina = 50001 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select tempMin from Temperatura where fkMaquina = 50001 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function TempMax3() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select top 12 tempMax from Temperatura where fkMaquina = 50003 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select tempMax from Temperatura where fkMaquina = 50003 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function TempMin3() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select top 12 tempMin from Temperatura where fkMaquina = 50003 order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select tempMin from Temperatura where fkMaquina = 50003 order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}


function buscarUltimaMedidaDisco(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;

            `select top 1 discoPercent from Leitura order by idLeitura desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
            `select discoPercent from Leitura order by idLeitura desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function UltimasMedidasRotulos(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            `select top 1 *, 
                convert(varchar, dtsColeta, 113) as dataCol 
                    from rotulosCount order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `
            select cpuMedia, ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF 
                from Leitura 
                    order by idLeitura 
                        desc limit ${limite_linhas};`


    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function UltimasMedidasFases(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            `select top 6 *, 
                convert(varchar, dataVisual, 106) as datasF 
                    from fasesCards order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `
            select cpuMedia, ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF 
                from Leitura 
                    order by idLeitura 
                        desc limit ${limite_linhas};`


    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function UltimasMedidasPrincipais(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            `select top 1 *, 
                convert(varchar, DataColeta, 106) as datasFP 
                    from CardsTotais where NomeSuporte = 'Suporte Interno' 
                        order by idTotais desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `
            select cpuMedia, ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF 
                from Leitura 
                    order by idLeitura 
                        desc limit ${limite_linhas};`


    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function UltimasMedidasGerais(idAquario, limite_linhas) {

    instrucaoSql = ''
    // instrucaoSql2 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            `select top 1 geraisF.* , 
                          totalCard.contagemTotal 
                from [dbo].[geraisCount] as geraisF
                    inner join [dbo].[CardsTotais] as totalCard
                        on geraisF.id = totalCard.idTotais
                            order by geraisF.id desc;`

        // instrucaoSql2 =
        //     `select top 6 * from fasesCards;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `
            select cpuMedia, ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF 
                from Leitura 
                    order by idLeitura 
                        desc limit ${limite_linhas};`


    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dashlucas(idTriagem, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            `select top 1 triagemTot ,tRam ,tCpu ,tDisc  from Triagem order by id desc; `

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql =
            `select top 1 triagemTot as "TriagemTotal",tRam as "RAM",tCpu as "CPU",tDisc as "DISCO" from Triagem order by id desc; `

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cardlucas(idTot, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            `select top 1 *, 
            convert(varchar, DataColeta, 106) as datasFP 
                from CardsTotais where NomeSuporte = 'Suporte de Manutenção' 
                    order by idTotais desc; `

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql =
            ` select top 1 *, 
        convert(varchar, DataColeta, 106) as datasFP 
            from CardsTotais where NomeSuporte = 'Suporte de Manutenção' 
                order by idTotais desc;`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function scripts() {
    if (process.env.AMBIENTE_PROCESSO == "producao") {
    const R = require("r-integration");
    const shell = require("r-script")
    let out = shell(path,
        R.executeRScript("./Linguagens/R_Files/ConexãoPipe.R")
    ).callSync();
    console.log(out);}
}

// listar processos
function buscarProc(fkMaquina){
    
    instrucaoSql = ''

    if(process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select idProcesso as 'ID', fkMaquina as 'Maquina', nome as 'Nome', pid as 'PID', status_proc as 'Status', cpu_percent as 'CPU %', ram_percent as 'RAM %' from Processos;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `select idProcesso, fkMaquina, nome, pid, status_proc, cpu_percent, ram_percent, data_hora from Processos where fkMaquina = ${fkMaquina};`; 
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// listar 3 top proc CPU%
function procCPU(){
    
    instrucaoSql = ''

    if(process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 3 * from Processos order by cpu_percent desc;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `select * from Processos as t1 join (select distinct nome, max(idProcesso) as idProcesso from Processos group by nome) as t2 on t1.idProcesso = t2.idProcesso order by cpu_percent desc LIMIT 3`; 
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// listar 3 top proc RAM%
function procRAM(){
    
    instrucaoSql = ''

    if(process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 3 * from Processos order by ram_percent desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `select top 3 * from Processos as t1 join (select distinct nome, max(idProcesso) as idProcesso from Processos group by nome) as t2 on t1.idProcesso = t2.idProcesso order by ram_percent desc`; 
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function lotethais(idLote){
    
    instrucaoSql = ''

    if(process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select cpuAlerta, ramAlerta, discoAlerta from Alertas where fkLote = ${idLote} order by 
        momento desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `select cpuAlerta, ramAlerta, discoAlerta from Alertas where fkLote = ${idLote} order by 
        momento desc`; 
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidasRAM,
    buscarMedidasEmTempoRealRAM,
    buscarUltimasMedidasTEMP,
    buscarMedidasEmTempoRealTEMP,
    buscarUltimasMedidasTEMP1,
    buscarMedidasEmTempoRealTEMP1,
    buscarUltimasMedidasTEMPMK1,
    buscarMedidasEmTempoRealTEMPMK1,
    buscarUltimasMedidasTEMPMK2,
    buscarMedidasEmTempoRealTEMPMK2,
    buscarUltimasMedidasTEMPMK3,
    buscarMedidasEmTempoRealTEMPMK3,
    buscarUltimasMedidasTEMPMK4,
    buscarMedidasEmTempoRealTEMPMK4,
    buscarUltimaMedidaDisco,
    UltimasMedidasRotulos,
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
    scripts,
    buscarProc,
    procCPU,
    procRAM,
    lotethais
}