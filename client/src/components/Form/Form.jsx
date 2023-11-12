import React from "react";
import styles from "./Form.module.css";
import image from "../../assets/rickandmortyphoto.png";
import validate from "./validation";

const Form = ({ onLogin }) => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    const errors = validate({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(errors);

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    onLogin(userData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img width="300" src={image} alt="rick and morty" />
        <form>
          <div>
            <div>
              <label>EMAIL</label>
            </div>

            <input
              name="email"
              value={userData.email}
              onChange={handleChange}
            ></input>
            {errors.email && <p className="danger">{errors.email}</p>}
          </div>
          <div>
            <div>
              <label>PASSWORD</label>
            </div>

            <input
              name="password"
              value={userData.password}
              onChange={handleChange}
            ></input>
            {errors.password && <p className="danger">{errors.password}</p>}
          </div>

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
