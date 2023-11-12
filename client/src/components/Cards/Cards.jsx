import styles from "./Cards.module.css";
import Card from "../Card/Card";

export default function Cards(props) {
  return (
    <div className={styles.container}>
      {props.characters.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            gender={item.gender}
            image={item.image}
            origin={item.origin}
            onClose={props.onClose}
          />
        );
      })}
    </div>
  );
}
