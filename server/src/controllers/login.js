const users = require("../utils/users");
const login = (req, res) => {
  const { email, password } = req.query;

  const userValid = users.find(
    (user) => user.email === email && user.password === password
  );

  if (userValid) {
    return res.status(200).json({ access: true });
  }
  return res
    .status(403)
    .json({
      access: false,
      message: "usuario o contraseña invalida. try again",
    });
};

module.exports = login;
