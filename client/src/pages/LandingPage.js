import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <header className="bg-dark text-white text-center py-5">
        <Container>
          <h1 className="display-4">Welcome to Rentify</h1>
          <p className="lead">Find and rent your dream property with ease</p>
          <Button variant="primary" as={Link} to="/register">Get Started</Button>
        </Container>
      </header>

      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Why Choose Us</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Wide Selection</Card.Title>
                  <Card.Text>
                    Browse through a wide variety of properties to find the perfect match for you.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Easy Process</Card.Title>
                  <Card.Text>
                    Our user-friendly platform makes renting easy and hassle-free.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Trusted Service</Card.Title>
                  <Card.Text>
                    We provide reliable and trustworthy service to ensure your satisfaction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Testimonials</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    "RentEase made finding my new apartment a breeze! Highly recommend."
                  </Card.Text>
                  <Card.Footer>- Jane Doe</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    "Great service and very user-friendly platform. Found the perfect rental quickly."
                  </Card.Text>
                  <Card.Footer>- John Smith</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    "I loved the wide selection of properties. RentEase made it easy to compare and choose."
                  </Card.Text>
                  <Card.Footer>- Sarah Lee</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 text-center">
        <Container>
          <h2 className="mb-4">Ready to Find Your New Home?</h2>
          <Button variant="primary" size="lg" as={Link} to="/register">Get Started Today</Button>
        </Container>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>&copy; 2023 RentEase. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
