const axios = require("axios");

const funcionAxios = async () => {
  const {
    data: { moves },
  } = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
  console.log(moves);
};
funcionAxios();
