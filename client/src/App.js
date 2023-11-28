import React, { useEffect } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
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

  const navigate = useNavigate();
  const URL = "http://localhost:3001/rickandmorty/";

  const login = async ({ email, password }) => {
    try {
      const { data } = await axios(
        `${URL}login?email=${email}&password=${password}`
      );
      const { access } = data;

      if (access) {
        setAccess(access);
        navigate("/home");
      }
    } catch ({ response }) {
      const { data } = response;
      alert(data.message);
    }
  };

  const logOut = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const { pathname } = useLocation();

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        console.log("::: data", data);
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("Personaje no encontrado");
      }
    } catch (error) {
      alert(error.response.data);
    }
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
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
