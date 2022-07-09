const axios = require("axios");

const funcionAxios = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(response.data);
};
funcionAxios();
