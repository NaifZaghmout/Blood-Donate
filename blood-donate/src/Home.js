import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const Home = () => {
  const commonImageStyle = {
    height: '300px',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  
  const imageUrls = [
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437640/pexels-puwadon-sangngern-5340280_otvusk.jpg',
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437615/pexels-artem-podrez-5726838_albohv.jpg',
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437629/pexels-karolina-grabowska-4226894_fskupm.jpg',
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437603/pexels-artem-podrez-6823603_jbcd53.jpg',
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437590/pexels-vlada-karpovich-5790810_azal66.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} className="text-center">
            {/* Organization's name with color-changing effect */}
            
            <Image src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ ...commonImageStyle, width: '100%' }} />
          </Col>
        </Row>
      </Container>




      


      
    </div>
  );
};

export default Home;