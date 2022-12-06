import app from './app.cjs';

const port = 3333

app.listen(port, () => {
    console.log('Servidor iniciado em localhost:' + port)
})