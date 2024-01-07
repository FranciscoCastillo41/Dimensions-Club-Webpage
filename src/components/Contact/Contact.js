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


