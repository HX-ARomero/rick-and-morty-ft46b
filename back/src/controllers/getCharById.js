const axios = require("axios");
const URL = "https://rym2.up.railway.app/api/character/";
const API_KEY = "henrystaff";

const getCharById = (res, id) => {
  axios
    .get(`${URL}${id}?key=${API_KEY}`)
    .then(response => response.data)
    .then(data => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status
      }
      return res
        .writeHead(200, { "content-type": "application/json"})
        .end( JSON.stringify(character));
    })
    .catch(error => {
        return res
          .writeHead(500, { "content-type": "text/plain"})
          .end(error.message);
        }
    )
}

module.exports = getCharById;

// https://rym2.up.railway.app/api/character/2?key=henrystaff