const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("test de RUTAS", () => {
  describe("/rickandmorty/character/:id", () => {
    it("respomde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      expect(body).toHaveProperty(
        "id" &&
          "name" &&
          "species" &&
          "gender" &&
          "status" &&
          "origin" &&
          "image"
      );
    });
    it("si hay un error responde con status: 404", async () => {
      await agent.get("/rickandmorty/character/9000").expect(404);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("responde segun las credenciales correctas", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=valee_mabra@hotmail.com&password=123456"
      );
      expect(body).toEqual({
        access: true,
      });
    });
    it("responde segun las credenciales incorrectas", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=valee_mabra@hotmail.com&password=123"
      );
      expect(body.access).toBeFalsy();
    });
  });
  describe("POST /rickandmorty/fav", () => {
    const character1 = {
      id: 1,
      name: "vale",
    };
    const character2 = {
      id: 2,
      name: "maria",
    };

    it("devuelve el personaje creado", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character1);
      expect(body).toContainEqual(character1);
    });
    it("devuelve todos los personajes creados", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character2);
      expect(body).toContainEqual(character1, character2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("debe devolver el arreglo si el id no se encuentra", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/3");
      expect(body).toEqual([
        {
          id: 1,
          name: "vale",
        },
        {
          id: 2,
          name: "maria",
        },
      ]);
    });
    it("elimina el personaje si el id es valido", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/1");
      expect(body).toEqual([
        {
          id: 2,
          name: "maria",
        },
      ]);
    });
  });
});
