import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/action";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  const handleOnClose = () => {
    handleFavorite();
    props.onClose(props.id);
  };
  return (
    <div className={styles.container} key={props.id}>
      <div className={styles.botonContainer}>
        <button className={styles.boton} onClick={handleOnClose}>
          X
        </button>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <Link to={`/detail/${props.id}`}>
        <h2>NOMBRE</h2>
        <h3 className={styles.cardName}>{props.name}</h3>
      </Link>

      <h2>ESTADO</h2>
      <h3>{props.status}</h3>

      <h2>ESPECIE</h2>
      <h3>{props.species}</h3>

      <h2>GENERO</h2>
      <h3>{props.gender}</h3>
      <img className={styles.imagen} src={props.image} alt="" />
    </div>
  );
}
