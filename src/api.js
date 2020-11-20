const axios = require("axios");
const baseUrl = "http://api.icndb.com/jokes/random";

export const getRandomJokes = (
  quantity = 1,
  firstName,
  lastName,
  excludedCategories = []
) => {
  const url = `${baseUrl}/${quantity}`;

  return axios
    .get(url, {
      params: {
        firstName,
        lastName,
        excludedCategories: [...excludedCategories, "explicit"],
      },
    })
    .then((response) => {
      const {
        data: { value },
      } = response;
      return value;
    })
    .catch((error) => {
      throw error;
    });
};
