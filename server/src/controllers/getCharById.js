const axios = require("axios");
const apiKey = "pi-hx-aquintero";
const URL = "https://rym2.up.railway.app/api/character/";

const getCharById = (req, res) => {
  const id = req.params.id;
  const urlID = `${URL}${id}?key=${apiKey}`;

  axios(urlID)
    .then(({ data }) => {
      const { name, gender, species, origin, image, status } = data;
      const character = { id, name, gender, species, origin, image, status };

      if (character.name) {
        return res.status(200).json(character);
      }
      res.status(404);
      return res.send("Not found");
    })
    .catch((err) => {
      res.status(500);
      return res.json({ error: err.message });
    });
};

module.exports = getCharById;
// const axios = require("axios");
// const apiKey = "pi-hx-aquintero";

// const getCharById = (res, id) => {
//   axios(`https://rym2.up.railway.app/api/character/${id}?key=${apiKey}`)
//     .then(({ data }) => {
//       const { name, gender, species, origin, image, status } = data;
//       const character = { id, name, gender, species, origin, image, status };

//       if (character.name) {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify(character));
//       }
//     })
//     .catch((err) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       return res.end(err.message);
//     });
// };
