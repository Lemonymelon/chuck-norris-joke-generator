const axios = require("axios");
const baseUrl = "http://api.icndb.com/jokes/random";

export const getRandomJokes = (
  quantity = 1,
  firstName,
  lastName,
  excludeCategories = ["explicit"]
) => {
  const url = `${baseUrl}/${quantity}`;

  return axios
    .get(url, {
      params: {
        firstName,
        lastName,
        excludeCategories,
      },
    })
    .then((response) => {
      const {
        data: { value },
      } = response;
      return value;
    });
};
