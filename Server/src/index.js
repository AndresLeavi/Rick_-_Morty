
const http = require ('http');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')//Le damos permiso al front para que me haga peticiones

const express = require('express');
const { getCharById } = require('./controllers/getCharById');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/rickandmorty/character/:id', (req, res) => {
  const id = req.params.id;
  getCharById(res, id);
});

app.listen(3001, () => {
  console.log('Server listening on port 3000!');
});
})