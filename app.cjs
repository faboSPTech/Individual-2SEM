// process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
<<<<<<< HEAD
// var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;
var PORTA = 3333;
=======
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;
>>>>>>> bddfacc3af14a5e406667cb4deb0d8b3d2101f51

var app = express();

var indexRouter = require("./src/routes/index.cjs");
var usuarioRouter = require("./src/routes/usuarios.cjs");
var avisosRouter = require("./src/routes/avisos.cjs");
var medidasRouter = require("./src/routes/medidas.cjs");
<<<<<<< HEAD
// var scriptRouter = require("./src/routes/script.cjs");

// const R = require("r-integration");
// const shell = require("r-script")
// let out = shell(
//     R.executeRScript("./Linguagens/R_Files/ConexãoPipe.R")
//     ).callSync();
// console.log(out);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
=======

app.use(express.json());
app.use(express.urlencoded({extended: false}));
>>>>>>> bddfacc3af14a5e406667cb4deb0d8b3d2101f51
app.use(express.static(path.join(__dirname, "/public/view/")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
<<<<<<< HEAD
app.use("/medidas", medidasRouter);
// app.use("/script", scriptRouter);
=======
app.use("/medidas", medidasRouter)
>>>>>>> bddfacc3af14a5e406667cb4deb0d8b3d2101f51

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
<<<<<<< HEAD
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`)
},);
=======
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
>>>>>>> bddfacc3af14a5e406667cb4deb0d8b3d2101f51
