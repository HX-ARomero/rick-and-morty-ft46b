const users = require("../utils/users.js");

module.exports = (req, res) => {
  //* req.query = { email: " ", password: " " }
  //* host/rickandmorty/login?email= &password=123
  const { email, password } = req.query;
  let access = false;
  //* { access: true || false }

  users.forEach(user => {
    if(
      user.email === email && user.password === password
      ) access = true;
  })

  return res.json({ access });
}