import styles from "./SearchBar.module.css";
import React from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = React.useState("");

  const handleChange = (evento) => {
    setId(evento.target.value);
  };

  const onAgregar = () => {
    onSearch(id);
  };

  return (
    <div className={styles.container}>
      <input type="search" value={id} onChange={handleChange} />
      <button onClick={onAgregar}>Agregar</button>
    </div>
  );
}
