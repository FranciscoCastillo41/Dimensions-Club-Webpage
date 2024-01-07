import React from 'react';
import { Container, Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';

function MyNavbar({ clubName, navLinks, onSidebarToggle, onTabChange }) {
  const handleNavItemClick = (tabId) => {
    onTabChange(tabId);
    
    if (tabId === 'home') {
      onSidebarToggle();
    } else if (document.body.classList.contains('offcanvas-open')) {
      onSidebarToggle();
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand onClick={() => handleNavItemClick('home')}>{clubName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => (
              <Nav.Link key={link.id} onClick={() => handleNavItemClick(link.id)}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link href="https://txwes.edu/">Texas Wesleyan</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              CS Txwes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
