// src/api.js
import axios from "axios";

const getUpcomingOdds = async (apiKey) => {
  const options = {
    method: "GET",
    url: "https://odds.p.rapidapi.com/v4/sports/upcoming/odds",
    params: {
      regions: "us",
      oddsFormat: "decimal",
      markets: "h2h,spreads",
      dateFormat: "iso",
    },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "odds.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getUpcomingOdds;
