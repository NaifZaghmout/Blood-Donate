import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../style/Footer.css'; // Assuming you have a separate CSS for Footer

const Footer = () => {
  return (
    <Container fluid className="footer-style">
      <Row>
        <Col md={12}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="social-icon-style" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="social-icon-style" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="social-icon-style" />
          </a>
          <p className="white-text">&copy; 2023 Your Website. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
