import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
      <Form.Group controlId="searchInput">
        <Form.Control
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for photos"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchInput;
