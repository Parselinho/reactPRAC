import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const GameItem = ({ odds, onClick }) => (
  <ListGroup.Item onClick={onClick}>
    {odds.sport_title}: {odds.home_team} vs {odds.away_team}
  </ListGroup.Item>
);

export default GameItem;
