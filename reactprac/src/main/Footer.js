import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3">
      <Container>
        <p className="mb-0 text-center">
          &copy; {new Date().getFullYear()} My Amazing App. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
