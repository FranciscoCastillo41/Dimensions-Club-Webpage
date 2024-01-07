import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Events = () => {
  const eventsData = [
    {
      title: 'Beginning of Semester',
      description: 'The start of the 2024 spring semester begins.',
      date: 'Jan 10, 2024',
    },
    {
      title: 'TBA',
      description: 'To be announced via email',
      date: 'Jan 10, 2024',
    },
    {
      title: 'End of semester celebration',
      description: 'Connect with fellow computer science students at our end of semester party.',
      date: 'TBA',
    },
  ];

  return (
    <Container className="py-2">
      <p className="text-center mb-2" style={{ color: 'white', fontSize: '1.5rem', marginTop: '20px' }}>
        Events
      </p>
      <Row className="gx-2 gy-2">
        {eventsData.map((event, index) => (
          <Col key={index} xs={12} md={4}>
            <Card className="h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem', color: 'white' }}>{event.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem', color: 'white' }}>{event.description}</Card.Text>
              </Card.Body>
              <Card.Footer  style={{ fontSize: '0.8rem', color: 'white' }}>
                {event.date}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;


