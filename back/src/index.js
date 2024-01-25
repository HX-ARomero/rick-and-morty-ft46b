const http = require("http");
const PORT = 3001;
const getCharById = require("./controllers/getCharById.js");

http.createServer((req, res) => {
  // SETEAMOS HEADERS
  res.setHeader('Access-Control-Allow-Origin', '*');
  // RUTAS
  if(req.url.startsWith("/rickandmorty/character")) {
    const id = req.url.split("/").pop();
    getCharById(res, id);
  }

}).listen(
  PORT,
  "127.0.0.1",
  () => console.log(
    `Server listening on http://localhost:${PORT}`
  )
)