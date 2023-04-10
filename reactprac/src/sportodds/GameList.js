import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import GameItem from './GameItem';

const GameList = ({ data, onGameClick }) => (
  <ListGroup>
    {data.map((odds, index) => (
      <GameItem key={index} odds={odds} onClick={() => onGameClick(index)} />
    ))}
  </ListGroup>
);

export default GameList;
