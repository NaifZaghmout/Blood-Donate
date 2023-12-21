import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Loader from '../components/Loader';
import '../style/Home.css';




const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437640/pexels-puwadon-sangngern-5340280_otvusk.jpg',
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437615/pexels-artem-podrez-5726838_albohv.jpg',
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437629/pexels-karolina-grabowska-4226894_fskupm.jpg',
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437603/pexels-artem-podrez-6823603_jbcd53.jpg',
    'https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437590/pexels-vlada-karpovich-5790810_azal66.jpg',
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Container fluid>
        <Row className="m-0">
          <Col md={12} className="text-center p-0">
            <Image
              src={imageUrls[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="common-image"
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="header-style">
        <Row>
          <Col md={12}>
            <h1>Welcome to Stockholm Blood Donate Organization</h1>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row>
          <Col md={6} className="text-center order-md-first">
            <h2 className="text-danger">Donating Blood as a Male</h2>
            <p className="donate-section-text">
              As a male donor, your contribution is crucial in saving lives. Your blood donation can help those in need and make a significant impact on the community.
            </p>
            <div className="read-more-container mb-3">
              <a href="https://www.blood.co.uk/who-can-give-blood/why-men-should-donate-blood/"
                className="read-more-button"
                target="_blank"
                rel="noopener noreferrer">
                Read More
              </a>

            </div>

          </Col>
          <Col md={6} className="text-center order-md-last">
            <h2 className="text-danger">Donating Blood as a Female</h2>
            <p className="donate-section-text">
              Female donors play a vital role in supporting healthcare efforts. Your blood donation is a gift of life that can benefit patients in various medical situations.
            </p>
            <div className="read-more-container mb-3">
              <a href="https://www.cosmopolitan.com/uk/body/health/a16811258/giving-donating-blood-information-facts-women/"
                className="read-more-button"
                target="_blank"
                rel="noopener noreferrer">
                Read More
              </a>
            </div>



          </Col>
        </Row>
      </Container>

      <Container fluid className="p-0">
        <Row>
          <Col md={12} className="p-0">
            <Image
              src="https://res.cloudinary.com/dusc2x8ri/image/upload/v1703147295/Priority-Health-Personal-Wellness-Men-vs.-Women-Heart-Health-feature-2-1170x480_rbg7ix.jpg"
              alt="Heart Health"
              fluid
              className="donor-section-image"
            />
          </Col>
        </Row>
      </Container>


      <Container className="section-style">
        <Row>
          <Col md={12} className="text-center">
            <h2 className="text-danger mt-2">Health Benefits for Blood Donation</h2>
            <ul className="list-style">
              <li className="list-item-style">
                Reduces Risk of Heart Disease
                <p className="health-benefits-text">
                  Regular blood donation can reduce the risk of cardiovascular diseases.
                </p>
              </li>
              <li className="list-item-style">
                Stimulates Blood Cell Production
                <p className="health-benefits-text">
                  Encourages the production of new blood cells in the body.
                </p>
              </li>
              <li className="list-item-style">
                Maintains Iron Levels
                <p className="health-benefits-text">
                  Helps in regulating iron levels in the body, reducing the risk of iron overload.
                </p>
              </li>
              <li className="list-item-style">
                Burns Calories
                <p className="health-benefits-text">
                  Donating blood burns approximately 650 calories per donation.
                </p>
              </li>
              <li className="list-item-style">
                Stimulates Red Blood Cell Production
                <p className="health-benefits-text">
                  Helps in generating fresh and healthy blood cells in the body.
                </p>
              </li>
              <li className="list-item-style">
                Promotes Liver Health
                <p className="health-benefits-text">
                  Regular donation helps maintain liver function.
                </p>

              </li>
            </ul>
            <div className="read-more-container mb-3">
              <a href="https://healthmatters.nyp.org/the-surprising-benefits-of-donating-blood/"
                className="read-more-button"
                target="_blank"
                rel="noopener noreferrer">
                Read More
              </a>
            </div>


          </Col>
        </Row>
      </Container>


      <Container fluid className="p-0">
        <Row>
          <Col md={12} className="p-0">
            <Image
              src="https://res.cloudinary.com/dusc2x8ri/image/upload/t_health/v1702720964/healthcare-1170_sfdu3r.jpg"
              alt="Additional Benefits"
              fluid
              id="healthBenefitsImage"
            />
          </Col>
        </Row>
      </Container>


      <Container className="section-style who-can-donate-section">
        <Row>
          <Col md={4} className="text-center">
            {/* md={4} gives the image column a third of the container width */}
            <Image
              src="https://res.cloudinary.com/dusc2x8ri/image/upload/v1701433582/whocan_k2hukg.jpg"
              alt="Who Can Donate"
              className="who-can-donate-image"
            />
          </Col>
          <Col md={8} className="text-left">
            {/* md={8} allows text to take up remaining space */}
            <h2>Who Can Donate?</h2>
            <p className="who-can-donate-text">People aged 18 to 75 are eligible to donate blood.</p>
            <p className="who-can-donate-text">Individuals should be in good health and free from certain conditions.</p>
            <p className="who-can-donate-text">Donors should weigh at least 110 pounds (50 kg).</p>
            <a href="https://www.goodrx.com/health-topic/hematology/who-cant-donate-blood"
              className="read-more-button"
              target="_blank"
              rel="noopener noreferrer">
              Read More
            </a>
          </Col>
        </Row>
      </Container>


    </div>
  );
};


export default Home;