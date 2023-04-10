import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BookmakerCard from './BookMakerCard';

const OddsModal = ({ show, selectedGame, handleClose, handlePrev, handleNext, isFirst, isLast }) => (
  <Modal show={show} onHide={handleClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>
        {selectedGame.sport_title}: {selectedGame.home_team} vs {selectedGame.away_team}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="row">
        <div className="col-sm-2">
          <Button variant="secondary" onClick={handlePrev} disabled={isFirst}>
            Previous
          </Button>
        </div>
        <div className="col-sm-8">
          {selectedGame.bookmakers.map((bookmaker, index) => (
            <BookmakerCard key={index} bookmaker={bookmaker} />
          ))}
        </div>
        <div className="col-sm-2">
          <Button variant="secondary" onClick={handleNext} disabled={isLast}>
            Next
          </Button>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default OddsModal;
