import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h2>Name</h2>
      <h3>{character?.name}</h3>
      <h2>Status</h2>
      <h3>{character?.status}</h3>
      <h2>Specie</h2>
      <h3>{character?.species}</h3>
      <h2>Gender</h2>
      <h3>{character?.gender}</h3>
      <h2>Origin</h2>
      <h3>{character.origin?.name}</h3>
      <img className={styles.image} src={character?.image} alt="" />
    </div>
  );
};

export default Detail;
