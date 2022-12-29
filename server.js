import app from './app.cjs';

const port = 3333

// const R = require("r-integration");
// console.log(out);

app.listen(port, () => {
    console.log('Servidor iniciado em localhost:' + port)
});

// function result(){
//     const R = require("r-integration");
//     R.executeRScript("./Linguagens/R_Files/ConexãoPipe.R");

// }
// console.log(result())

// app.use(R, 
//     function result(){
//         const R = require("r-integration");
//         R.executeRScript("./Linguagens/R_Files/ConexãoPipe.R");
//     } 
// );