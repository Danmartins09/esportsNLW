import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.send('acessou ads atualizado!');
});
app.listen(3333);
