const axios = require('axios');

function getCharById(res, id) {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      const character = {
        id: id,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        origin: response.data.origin.name,
        image: response.data.image,
        status: response.data.status,
      };
      res.status(200).json(character);
    })
    .catch(error => {
      res.status(500).contentType('text/plain').send(error.message);
    });
}

module.exports = { getCharById };