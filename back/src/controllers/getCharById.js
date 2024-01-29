const axios = require("axios");
const URL = "https://rym2.up.railway.app/api/character/";
const API_KEY = "henrystaff";

const getCharById = (req, res) => {
  // req.params = { id: 2 }
  const { id } = req.params;
    axios
      .get(`${URL}${id}?key=${API_KEY}`)
      .then(({ data }) => {
        const { id, status, name, species, origin, image, gender } = data;
        const character = { id, status, name, species, origin, image, gender };
        // character = { }
        // console.log(!{})
        return character.name
          ? res.json(character)
          : res.status(404).send("Not found.")
      })
      .catch(error => res.status(500).send(error.message))
}

module.exports = getCharById;

// https://rym2.up.railway.app/api/character/2?key=henrystaff