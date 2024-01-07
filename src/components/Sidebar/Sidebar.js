import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';

const Sidebar = ({ show, onHide, navLinks, handleTabChange }) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Club Links</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          {navLinks.map((link, index) => (
            <Nav.Link
              key={index}
              href={link.href}
              onClick={() => {
                handleTabChange(link.id);
                onHide(); 
              }}
            >
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
