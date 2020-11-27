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
      console.log(value);
      return value;
    })
    .catch((error) => {
      // console.log(error);

      throw error;
    });
};
