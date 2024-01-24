const http = require("http");
const PORT = 3001;
const characters = require("./utils/data.js");

http.createServer((req, res) => {
  // SETEAMOS HEADERS
  res.setHeader('Access-Control-Allow-Origin', '*');
  // RUTAS
  if(req.url.startsWith("/rickandmorty/character")) {
    const id = Number(req.url.split("/").pop());
    //console.log(typeof id);
    const character = characters.find(
      char => char.id === id
    )

    if(character) {
      return res
        .writeHead(200, { "content-type": "application/json"})
        .end( JSON.stringify(character));
    } else {
      return res
        .writeHead(404, { "content-type": "application/json"})
        .end( JSON.stringify({ message: `Personaje con id ${id} no encontrado` }));
    }

  }

  return res
      .writeHead(404, { "content-type": "application/json"})
      .end( JSON.stringify({ message: `No hay nada en esta ruta...` }));



}).listen(
  PORT,
  "127.0.0.1",
  () => console.log(
    `Server listening on http://localhost:${PORT}`
  )
)