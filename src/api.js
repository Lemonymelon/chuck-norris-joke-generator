const axios = require("axios");
const baseUrl = "http://api.icndb.com/jokes/random";

export const getRandomJokes = (
  quantity = 1,
  firstName,
  lastName,
  excludeCategories
) => {
  const url = baseUrl + "/1";
  axios.get(baseUrl).then((response) => {
    console.log(response);
    // console.log(jokes);
  });
};
