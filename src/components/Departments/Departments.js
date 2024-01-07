import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Departments = () => {
  const departmentsData = [
    {
      title: 'Computer Science',
      description: 'Explore the world of programming and computer technologies.',
      imageSrc: '/Images/home-1.jpg',
      icon: 'fas fa-desktop',
    },
    {
      title: 'Mathematics',
      description: 'Discover the beauty of numbers and mathematical concepts.',
      imageSrc: '/Images/home-2.jpg',
      icon: 'fas fa-calculator',
    },
    {
      title: 'Physics',
      description: 'Dive into the fundamental principles that govern the universe.',
      imageSrc: '/Images/physics.jpg',
      icon: 'fas fa-atom',
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" style={{ color: 'white' }}>
        Departments
      </h2>
      <p className="text-center mb-4" style={{ color: 'white', fontSize: '1rem' }}>
        Explore our diverse academic departments and their exciting offerings.
      </p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {departmentsData.map((department, index) => (
          <Col key={index} className="mb-4">
            <Card style={{ background: 'rgba(255, 255, 255, 0.2)', overflow: 'hidden' }} text="white">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + department.imageSrc}
                alt={`${department.title} Image`}
                style={{ height: '120px', objectFit: 'cover' }} // Adjusted height for smaller cards
              />
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs="auto">
                    <i className={department.icon} style={{ fontSize: '20px', marginRight: '8px' }}></i>
                  </Col>
                  <Col>
                    <Card.Title>{department.title}</Card.Title>
                  </Col>
                </Row>
                <Card.Text>{department.description}</Card.Text>
                <Button variant="primary" href={`#${department.title.replace(/\s+/g, '-').toLowerCase()}`}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Departments;



