import React from 'react';
import Card from 'react-bootstrap/Card';

const BookmakerCard = ({ bookmaker }) => (
  <Card className="mb-3">
    <Card.Header>
      <strong>{bookmaker.title}</strong>
    </Card.Header>
    <Card.Body>
      {bookmaker.markets.map((market, idx) => (
        <div key={idx}>
          <p>{market.key}</p>
          <ul>
            {market.outcomes.map((outcome, outcomeIdx) => (
              <li key={outcomeIdx}>
                {outcome.name}: {outcome.price} {outcome.point && `(${outcome.point})`}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Card.Body>
  </Card>
);

export default BookmakerCard;
