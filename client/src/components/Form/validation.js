const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/;

const validate = (inputs) => {
  const errors = {};

  if (!regexEmail.test(inputs.email)) {
    errors.email = "debe ser un correo electronico";
  }

  if (inputs.email === "") {
    errors.email = "el email no puede estar vacio";
  }
  if (inputs.email.length > 35) {
    errors.email = "la contraseña no puede tener mas de 35 caracteres";
  }

  if (!regexPassword.test(inputs.password)) {
    errors.password = "la constraseña debe tener un numero";
  }

  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = "la constraseña debe tener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validate;
