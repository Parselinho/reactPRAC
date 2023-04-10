import React, { useState, useEffect } from "react";
import getUpcomingOdds from "./Api";
import GameList from "./GameList";
import OddsModal from "./OddsModal";
import "bootstrap/dist/css/bootstrap.min.css";

const SportOddsApp = () => {
  const [data, setData] = useState(null);
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);
  const apiKey = "ddbf5dd6e5msh030cf08a7275e29p1e5ceejsn2f17613e6446"; // Replace with your actual API key

  useEffect(() => {
    const fetchData = async () => {
      const upcomingOdds = await getUpcomingOdds(apiKey);
      console.log("Fetched data:", upcomingOdds); // Log the fetched data
      setData(upcomingOdds);
    };
    fetchData();
  }, []);

  const handleGameClick = (index) => {
    setSelectedGameIndex(index);
  };

  const handleClose = () => {
    setSelectedGameIndex(null);
  };

  const handlePrev = () => {
    setSelectedGameIndex((prevState) => prevState - 1);
  };

  const handleNext = () => {
    setSelectedGameIndex((prevState) => prevState + 1);
  };

  const selectedGame = data && data[selectedGameIndex];

  return (
    <div className="App">
      <h1>Upcoming Games</h1>
      {data ? (
        <GameList data={data} onGameClick={handleGameClick} />
      ) : (
        <p>Loading data...</p>
      )}

      {selectedGame && (
        <OddsModal
          show={selectedGameIndex !== null}
          selectedGame={selectedGame}
          handleClose={handleClose}
          handlePrev={handlePrev}
          handleNext={handleNext}
          isFirst={selectedGameIndex === 0}
          isLast={selectedGameIndex === data.length - 1}
        />
      )}
    </div>
  );
};

export default SportOddsApp;
