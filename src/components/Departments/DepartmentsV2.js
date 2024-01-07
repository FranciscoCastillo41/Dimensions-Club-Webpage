import React from 'react';
import { Container, Card, Button, Carousel } from 'react-bootstrap';

function DepartmentsVersionTwo() {
  const departmentsData = [
    {
      title: 'Computer Science',
      description: 'Explore the world of programming and computer technologies.',
      imageSrc: '/Images/home-1.jpg',
      link: 'https://txwes.edu/academics/artssciences/undergraduate-majors/computer-science/', 
    },
    {
      title: 'Mathematics',
      description: 'Discover the beauty of numbers and mathematical concepts.',
      imageSrc: '/Images/home-2.jpg',
      link: 'https://txwes.edu/academics/artssciences/undergraduate-majors/mathematics/', 
    },
    {
      title: 'Physics',
      description: 'Dive into the fundamental principles that govern the universe.',
      imageSrc: '/Images/physics.jpg',
      link: 'https://txwes.edu/academics/artssciences/undergraduate-minors/physics/', 
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-2" style={{ color: 'white' }}>
        Departments
      </h2>
      <p className="text-center mb-4" style={{ color: 'white', fontSize: '1.2rem' }}>
        Explore our diverse academic departments and their exciting offerings.
      </p>
      <Carousel>
        {departmentsData.map((department, index) => (
          <Carousel.Item key={index} style={{ height: '50vh' }}>
            <div
              className="overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', 
              }}
            />
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + department.imageSrc}
              alt={`${department.title} Image`}
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
            <Carousel.Caption>
              <h3>{department.title}</h3>
              <p>{department.description}</p>
              <Button variant="light" href={department.link}>
                Learn More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default DepartmentsVersionTwo;


