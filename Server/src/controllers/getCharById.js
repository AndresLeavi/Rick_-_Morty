const URL = "https://rickandmortyapi.com/api/character";
const axios = require ('axios');


const getCharById = (req, res) => {
  const {id} = req.params;

  axios.get(`${URL}/${id}`)
  .then(response => response.data)
  .then(({status, name, species, origin, image, gender}) => {
      if(id && name){
          const character = {
            id, 
            name, 
            species, 
            origin,
            image,
            gender,
            status
          }
          return res.status(200).json(character)
      }
      return res.status(404).send('Not found');
  })
  .catch(error => res.status(500).send(error.message))

}

module.exports = {
  getCharById
}