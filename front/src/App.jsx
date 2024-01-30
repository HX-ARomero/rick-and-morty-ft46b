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

  const onSearch = async (id) => {
    try {
      if (!id) return alert("Ingresa un ID");
      if (characters.find((char) => char.id === parseInt(id)))
        return alert(`Ya existe el personaje con el id ${id}`);
      const { data } = await axios.get(`${URL}${id}`);
      if (data.name) {
        setCharacters([data, ...characters]);
      } else {
        alert(`No hay personajes con el id ${id}`);
      }
    } catch (error) {
      alert(error.message)
    }
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

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      // const { access } = data;
      //* { data: { access: true } }
      setAccess(data.access);
      access && navigate('/home');

      if(!access) return alert("Credenciales incorrectas!!!");
      
    } catch (error) {
      console.log(error.message)
    }
 }

  useEffect(()=>{
    // !access && navigate('/')
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
