import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-4 mb-4">Welcome to My Amazing App!</h1>
        <p className="lead">This app demonstrates the power of Bootstrap and React to create beautiful and responsive user interfaces.</p>
      </div>
      <Container>
        <h2 className="text-center mb-5">Featured Sections</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/350x200.png?text=Image+1" alt="Image 1" />
              <Card.Body>
                <Card.Title>Section 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ligula et odio tristique facilisis.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/350x200.png?text=Image+2" alt="Image 2" />
              <Card.Body>
                <Card.Title>Section 2</Card.Title>
                <Card.Text>
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/350x200.png?text=Image+3" alt="Image 3" />
              <Card.Body>
                <Card.Title>Section 3</Card.Title>
                <Card.Text>
                  Praesent ac orci tempus, consequat velit in, fringilla augue. Duis maximus semper dui, non lobortis sem.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
