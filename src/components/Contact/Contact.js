import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ContactInformation = ({ contacts, title }) => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" style={{ color: 'white' }}>
        {title}
      </h2>
      <Row className="gx-2 gy-2">
        {contacts.map((contact, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem', fontWeight: 'bold' }}>{contact.role}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem' }}>
                  {contact.name}
                  <br />
                  Email: {contact.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const ClubContacts = () => {
  const clubContacts = [
    { role: 'President:', name: ' Francisco Castillo', email: 'fcastillo@txwes.edu' },
    { role: 'Vice President:', name: ' Roberto Nunez', email: 'rnunez@txwes.edu' },
    { role: 'Secretary:', name: ' Noelani P. Villiarimo', email: 'npvilliarimo@txwes.edu' },
    { role: 'Treasurer:', name: ' Andres N. Aguilera', email: 'anaguilera@txwes.edu' },
  ];

  const scienceDepartmentFaculty = [
    { name: ' Prof. Yukong Zhang', email: 'yzhang@txwes.edu' },
    { name: ' Prof. Samuel O. Rodriguez', email: 'sorodriguez@txwes.edu' },
    { name: ' Prof. Luis G. Aguirre', email: 'lgaguirre@txwes.edu' },
  ];

  return (
    <div>
      <ContactInformation contacts={clubContacts} title="Club Contacts" />
      <ContactInformation contacts={scienceDepartmentFaculty} title="Science Department Faculty" />
    </div>
  );
};

export default ClubContacts;


/*
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const clubContacts = [
    { role: 'President:', name: ' Francisco Castillo', email: 'fcastillo@txwes.edu' },
    { role: 'Vice President:', name: ' Roberto Nunez', email: 'rnunez@txwes.edu' },
    { role: 'Secretary:', name: ' Noelani P. Villiarimo', email: 'npvilliarimo@txwes.edu' },
    { role: 'Treasurer:', name: ' Andres N. Aguilera', email: 'anaguilera@txwes.edu' },
  ];

  const scienceDepartmentFaculty = [
    { name: ' Prof. Yukong Zhang', email: 'yzhang@txwes.edu' },
    { name: ' Prof. Samuel O. Rodriguez', email: 'sorodriguez@txwes.edu' },
    { name: ' Prof. Luis G. Aguirre', email: 'lgaguirre@txwes.edu' },
  ];

  const renderContactList = (contacts) =>
    contacts.map((contact, index) => (
      <li key={index} className="mb-3">
        <span className="font-weight-bold mr-2">{contact.role}</span>
        {contact.name} - {contact.email}
      </li>
    ));

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{ color: 'white', fontSize: '2rem' }}>
        Contact Information
      </h2>
      <Row className="mb-5">
        <Col md={6}>
          <h3 style={{ color: 'white', fontSize: '1.8rem' }}>Club Leadership</h3>
          <ul className="list-unstyled" style={{ color: 'white' }}>{renderContactList(clubContacts)}</ul>
        </Col>
        <Col md={6}>
          <h3 style={{ color: 'white', fontSize: '1.8rem' }}>Science Department Faculty</h3>
          <ul className="list-unstyled" style={{ color: 'white' }}>{renderContactList(scienceDepartmentFaculty)}</ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
*/

