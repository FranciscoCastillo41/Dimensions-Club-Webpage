import React from 'react';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" style={{ color: 'white' }}>About Us</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <p style={{ color: 'white' }}>
            Welcome to Dimensions Club, where we are committed to providing an exceptional learning experience. Our
            diverse departments cover a wide range of subjects, from Computer Science to Physics and Math.
          </p>
          <p style={{ color: 'white' }}>
            Our dedicated team of educators is passionate about fostering a community of lifelong learners. Whether
            you're a student, professional, or simply curious, Dimensions Club offers a welcoming environment for
            intellectual growth and exploration.
          </p>
          <Button variant="light" href="https://txwes.edu/academics/artssciences/undergraduate-minors/physics/get-involved/dimensions-club/">
            Learn More
          </Button>
        </Col>
        <Col md={6} className="text-center mt-4 mt-md-0">
        <Image
            src={process.env.PUBLIC_URL + '/Images/about.jpg'}
            alt="About Us Image"
            fluid
        />

        </Col>
      </Row>
    </Container>
  );
}

export default About;

