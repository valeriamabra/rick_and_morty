import React, { useEffect } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
//import SearchBar from './components/SearchBar.jsx';
//import characters from "./data.js";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = React.useState([]); //HOOK useState sirve para crear un estado en react
  //programa una actualización al objeto estado de un componente.
  //Cuando el estado cambia, el componente responde volviendo a renderizar.

  const [access, setAccess] = React.useState(false);

  const EMAIL = "valee_mabra@hotmail.com";
  const PASSWORD = "123456";
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else alert("el nombre de usuario o la constraseña son incorrectas");
  };

  const logOut = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const { pathname } = useLocation();

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    const arrayFiltrado = characters.filter((item) => {
      if (id == item.id) {
        return false;
      } else {
        return true;
      }
    });

    setCharacters(arrayFiltrado);
  };

  return (
    <div className={styles.app}>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      {pathname !== "/" && <Nav onLogOut={logOut} onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form onLogin={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
