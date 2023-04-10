import React, { useState } from 'react';
import PhotoSearch from './PhotoSearch';
import SearchInput from './SearchInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('explore');

  return (
    <Container>
      <Row>
        <Col>
          <h1>Unsplash Photo Search</h1>
          <SearchInput setSearchQuery={setSearchQuery} />
          <PhotoSearch searchQuery={searchQuery} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
