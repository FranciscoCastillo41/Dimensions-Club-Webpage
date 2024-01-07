import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <Navbar fixed="bottom" expand="md" style={{ backgroundColor: 'transparent', color: 'white' }}>
      <Container className="justify-content-center">
        <Navbar.Text className="text-center" style={{ color: 'white' }}>
          &copy; {new Date().getFullYear()} Website made by Francisco Castillo
          <a href="https://github.com/your-github-repository" target="_blank" rel="noopener noreferrer" className="ml-2" style={{ color: 'white', padding: '10px' }}>
            <FaGithub size={20} />
          </a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;


