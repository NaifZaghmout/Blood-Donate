import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const commonImageStyle = {
    height: '300px',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  
  const headerStyle = {
    backgroundColor: 'darkorchid',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };


  const sectionStyle = {
    marginTop: '70px',
    textAlign: 'center',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
  };

  const listItemStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '20px',
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
  }, [imageUrls.length]);


  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} className="text-center">


            <Image src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ ...commonImageStyle, width: '100%' }} />
          </Col>
        </Row>
      </Container>

      <Container fluid style={headerStyle}>
        <Row>
          <Col md={12}>
            <h1>Welcome to Stockholm Blood Donate Organization</h1>
          </Col>
        </Row>
      </Container>

      {/* Single Section for Blood Donation as (Male and Female) */}
      <Container className="mt-4">
        <Row>
          <Col md={6} className="text-center order-md-first">
            <h2 className="text-danger">Donating Blood as a Male</h2>
            <p className="text-justify" style={{ fontSize: '18px', letterSpacing: '1px', marginTop: '10px' }}>
              As a male donor, your contribution is crucial in saving lives. Your blood donation can help those in need and make a significant impact on the community.
            </p>
            <Image src="https://res.cloudinary.com/dusc2x8ri/image/upload/v1701420205/images-male_ir189s.jpg" alt="Male Donor" roundedCircle fluid style={commonImageStyle} />
          </Col>
          <Col md={6} className="text-center order-md-last">
            <h2 className="text-danger">Donating Blood as a Female</h2>
            <p className="text-justify" style={{ fontSize: '18px', letterSpacing: '1px', marginTop: '10px' }}>
              Female donors play a vital role in supporting healthcare efforts. Your blood donation is a gift of life that can benefit patients in various medical situations.
            </p>
            <Image src="https://res.cloudinary.com/dusc2x8ri/image/upload/v1701420190/images-female_qlhjmx.jpg" alt="Female Donor" roundedCircle fluid style={commonImageStyle} />
          </Col>
        </Row>
      </Container>

      {/* Single Section for Health Benefits for Blood Donation (Male and Female) */}

      <Container style={sectionStyle}>
        <Row>
          <Col md={12} className="text-center">
            <h2 className="text-danger mt-2">Health Benefits for Blood Donation</h2>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Reduces Risk of Heart Disease
                <p style={{ fontSize: '18px', fontWeight: 'normal', marginBottom: '15px' }}>
                  Regular blood donation can reduce the risk of cardiovascular diseases.
                </p>
              </li>
              <li style={listItemStyle}>
                Stimulates Blood Cell Production
                <p style={{ fontSize: '18px', fontWeight: 'normal', marginBottom: '15px' }}>
                  Encourages the production of new blood cells in the body.
                </p>
              </li>
              <li style={listItemStyle}>
                Maintains Iron Levels
                <p style={{ fontSize: '18px', fontWeight: 'normal', marginBottom: '15px' }}>
                  Helps in regulating iron levels in the body, reducing the risk of iron overload.
                </p>
              </li>
              <li style={listItemStyle}>
                Burns Calories
                <p style={{ fontSize: '18px', fontWeight: 'normal', marginBottom: '15px' }}>
                  Donating blood burns approximately 650 calories per donation.
                </p>
              </li>
              <li style={listItemStyle}>
                Stimulates Red Blood Cell Production
                <p style={{ fontSize: '18px', fontWeight: 'normal', marginBottom: '15px' }}>
                  Helps in generating fresh and healthy blood cells in the body.
                </p>
              </li>
              <li style={listItemStyle}>
                Promotes Liver Health
                <p style={{ fontSize: '18px', fontWeight: 'normal', marginBottom: '15px' }}>
                  Regular donation helps maintain liver function.
                </p>
              </li>

            </ul>

            <Image
              src="https://res.cloudinary.com/dusc2x8ri/image/upload/v1701430243/images_qwuht9.jpg"
              alt="Additional Benefits"
              roundedCircle
              fluid
              style={commonImageStyle}
            />
          </Col>
        </Row>
      </Container>

      {/* Single Section for Who can donate */}
      <Container style={{ ...sectionStyle, background: '#333', padding: '80px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Row>
          <Col md={6} className="text-center" style={{ paddingRight: '15px' }}>
            <Image
              src="https://res.cloudinary.com/dusc2x8ri/image/upload/v1701433582/whocan_k2hukg.jpg"
              alt="Who Can Donate"
              rounded
              fluid
              style={{ ...commonImageStyle, width: '80%', height: '80%', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6} className="text-left" style={{ paddingLeft: '15px', color: 'white' }}>
            <h2>Who Can Donate</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
                Age
                <p style={{ fontSize: '14px', fontWeight: 'normal' }}>People aged 17 to 75 are eligible to donate blood.</p>
              </li>
              <li style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
                Health Condition
                <p style={{ fontSize: '14px', fontWeight: 'normal' }}>Individuals should be in good health and free from certain conditions.</p>
              </li>
              <li style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
                Weight
                <p style={{ fontSize: '14px', fontWeight: 'normal' }}>Donors should weigh at least 110 pounds (50 kg).</p>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>


      
    </div>
  );
};

export default Home;