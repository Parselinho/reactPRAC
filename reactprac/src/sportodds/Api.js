import axios from "axios";

const getUpcomingOdds = async (apiKey, region) => {
  try {
    const response = await axios.get("https://odds.p.rapidapi.com/v4/sports/upcoming/odds", {
      params: {
        regions: region,
        oddsFormat: "decimal",
        markets: "h2h,spreads",
        dateFormat: "iso",
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "odds.p.rapidapi.com",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};

export default getUpcomingOdds;
