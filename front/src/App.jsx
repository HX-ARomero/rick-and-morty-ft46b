import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Error404 from "./components/error/Error404.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";


function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  // const URL = "https://rym2.up.railway.app/api/character/";
  const URL = "http://localhost:3001/rickandmorty/character/";
  // const API_KEY = "henrystaff";
  const EMAIL = ''
  const PASSWORD = ''

  const onSearch = (id) => {
    if (!id) return alert("Ingresa un ID");
    if (characters.find((char) => char.id === parseInt(id)))
      return alert(`Ya existe el personaje con el id ${id}`);

    axios
      .get(`${URL}${id}`)
      //* http://localhost:3001/rickandmorty/character/${id}
      .then(({ data }) => {
        if (data.name) {
          setCharacters([data, ...characters]);
        } else {
          alert("No hay personajes con ese ID!");
        }
      })
      .catch((err) => alert(err.message));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  // const login = ({ email, password }) => {
  //  if(email === EMAIL && password === PASSWORD) {
  //     setAccess(true)
  //     navigate('/home')
  //  }
  //  else alert('usuario o contraseña incorrectos')
  // }

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { access } = data;
        setAccess(data);
        access && navigate('/home');
        if(!access) return alert("Credenciales incorrectas!!!");
      });
 }

  useEffect(()=>{
  //  !access && navigate('/')
  !access && navigate('/home')
  },[access])

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
