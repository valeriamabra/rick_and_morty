import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import Card from "../Card/Card";
import {
  addFav,
  removeFav,
  filterCards,
  orderCards,
  removeFilter,
} from "../../redux/actions/action";
import { useState } from "react";

const Favorites = ({ onClose }) => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    if (e.target.value === "") return;
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    if (e.target.value === "All") {
      dispatch(removeFilter());
    } else {
      dispatch(filterCards(e.target.value));
    }
  };

  return (
    <>
      <div>
        <select onChange={handleOrder}>
          <option value="">Ordenar</option>
          <option value={"A"}>ascendente</option>
          <option value={"D"}>descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="All">Todos</option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
          <option value={"Genderless"}>Genderless</option>
          <option value={"unknown"}>unknown</option>
        </select>
      </div>
      <div className={styles.container}>
        {myFavorites.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              status={item.status}
              species={item.species}
              gender={item.gender}
              origin={item.origin.name}
              image={item.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
