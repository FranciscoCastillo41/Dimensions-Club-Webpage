import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Departments() {
  const departmentsData = [
    {
      title: 'Computer Science',
      description: 'Explore the world of programming and computer technologies.',
      imageSrc: '/Images/comp-sc.jpg', 
    },
    {
      title: 'Mathematics',
      description: 'Discover the beauty of numbers and mathematical concepts.',
      imageSrc: '/Images/home-2.jpg', 
    },
    {
      title: 'Physics',
      description: 'Dive into the fundamental principles that govern the universe.',
      imageSrc: '/Images/comp-sc.jpg', 
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" style={{ color: 'white' }}>
        Departments
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {departmentsData.map((department, index) => (
          <Col key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + department.imageSrc} alt={`${department.title} Image`} />
              <Card.Body>
                <Card.Title>{department.title}</Card.Title>
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
}

export default Departments;


