const axios = require("axios");
const URL = "https://rym2.up.railway.app/api/character/";
const API_KEY = "henrystaff";

const getCharById = async (req, res) => {
  try {
    const charId  = req.params.id; //* req.params = { id: "33" }
    const { data } = await axios.get(`${URL}${charId}?key=${API_KEY}`); //* { data: {...} }
    const { id, status, name, species, origin, image, gender } = data;
    const character = { id, status, name, species, origin, image, gender };
    return character.name
      ? res.json(character)
      : res.status(404).send("Not found.")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = getCharById;

// https://rym2.up.railway.app/api/character/2?key=henrystaff