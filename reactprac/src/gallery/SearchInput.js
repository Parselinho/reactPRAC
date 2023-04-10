import React, { useState } from 'react';
import { Form, Button, FormControl, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchInput = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="searchInput">
            <FormControl
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search for photos"
            />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit" className="btn-lg heightFix">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchInput;
