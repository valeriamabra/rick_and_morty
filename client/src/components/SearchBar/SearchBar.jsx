import styles from "./SearchBar.module.css";
import React from "react";

export default function SearchBar({ onSearch, onRandom }) {
  const [id, setId] = React.useState("");

  const handleChange = (evento) => {
    setId(evento.target.value);
  };

  const onAgregar = () => {
    if (!id) {
      alert("tienes que buscar un personaje");
    } else {
      onSearch(id);
    }
  };

  return (
    <div>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="ingrese un id"
      />
      <button onClick={onAgregar} className={styles.button}>
        Agregar
      </button>
      <button onClick={onRandom} className={styles.button}>
        Buscar Random
      </button>
    </div>
  );
}
