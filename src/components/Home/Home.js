import React from 'react';
import { Container, Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Events from '../Events/Events';

function Home() {
  return (
    <div className="flex-grow-1 text-center py-5" style={{ color: 'white' }}>
      <h1 className="display-3">Dimensions Club</h1>
      <p className="lead">
        Explore the world of knowledge with our various departments and exciting events.
      </p>
      <Button variant="light" href="https://txwes.edu/academics/artssciences/undergraduate-minors/physics/get-involved/dimensions-club/">
        Learn More
      </Button>
      <Events />
      <Footer />
    </div>
  );
}

export default Home;
