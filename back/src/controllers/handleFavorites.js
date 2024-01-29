let myFavorites = [];

const postFav = (req, res) => {
  //* FRONT => body { id, name, ... }
  myFavorites.push(req.body);
  return res.json(myFavorites);
}

const deleteFav = (req, res) => {
  //* host/rickandmorty/fav/:id
  //* characters [ 1, 2, 3 ]
  //*                    ^2
  //* 
  const { id } = req.params;
  myFavorites = myFavorites.filter(char =>
    char.id !== Number(id)
  )
  return res.json(myFavorites);
}

module.exports = { postFav, deleteFav }