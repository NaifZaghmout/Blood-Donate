// AboutUs.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
    const sectionStyle = {
        marginTop: '70px',
        textAlign: 'center',
    };

    const paragraphStyle = {
        fontSize: '18px',
        marginBottom: '15px',
    };

    // Footer styles and social icon styles
    const footerStyle = {
        backgroundColor: 'darkorchid',
        padding: '10px 0',
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '15px',
    };

    const socialIconStyle = {
        marginRight: '15px',
        fontSize: '24px',
        color: 'white',
    };

    return (
        <Container style={sectionStyle}>
            <Row>
                <Col md={12} className="text-center">
                    <h2 className="text-danger mt-2">About Our Organization</h2>
                    <Image
                        src="https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437640/pexels-puwadon-sangngern-5340280_otvusk.jpg"
                        alt="Blood Donation Organization"
                        roundedCircle
                        fluid
                        style={{ height: '300px', objectFit: 'cover', marginBottom: '20px' }}
                    />
                    <p style={paragraphStyle}>
                        Welcome to our Blood Donation Organization! We are a dedicated group of individuals committed to making a positive impact on the health and well-being of our community. Our mission is simple yet powerful to save lives through the promotion of blood donation and ensuring a safe and sufficient blood supply for those in need.
                    </p>
                    <p style={paragraphStyle}>
                        Over the years, our organization has grown, and we've witnessed the incredible generosity of donors, the dedication of volunteers, and the expertise of healthcare professionals. Together, we form a united front against health challenges, and we strive to create a community where the act of giving blood becomes a symbol of compassion, solidarity, and hope.
                    </p>
                    <p style={paragraphStyle}>
                        At the core of our organization are values such as empathy, integrity, and community service. We believe that every individual has the power to make a difference, and through blood donation, we can collectively contribute to a healthier and happier world.
                    </p>
                </Col>
            </Row>

            {/* Section 2: Why We Help */}
            <Row>
                <Col md={12} className="text-center">
                    <h2 className="text-danger mt-4">Why We Help</h2>
                    <p style={paragraphStyle}>
                        At our organization, we firmly believe in the life-saving power of blood donation. Every drop of blood donated has the potential to make a significant difference in someone's life. We are passionate about helping people through blood donation for various compelling reasons:
                    </p>
                    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
                        <li style={paragraphStyle}>
                            <strong>Emergency Situations:</strong> In critical situations such as accidents, surgeries, and natural disasters, rapid access to blood can be a matter of life and death. By donating, you become a crucial link in the chain of emergency healthcare.
                        </li>
                        <li style={paragraphStyle}>
                            <strong>Medical Treatments:</strong> Many medical conditions, including cancer and chronic illnesses, require regular blood transfusions. Donors play a vital role in supporting patients undergoing treatment, offering hope and a chance for recovery.
                        </li>
                        <li style={paragraphStyle}>
                            <strong>Community Support:</strong> Blood donation is not just a medical act; it's a community endeavor. It fosters a sense of unity and care within the community, creating bonds that go beyond individual donations.
                        </li>
                        <li style={paragraphStyle}>
                            <strong>Global Impact:</strong> Blood donation is a global effort. By contributing, our donors become part of a worldwide network that collectively addresses health challenges and supports humanitarian efforts, making a positive impact on a global scale.
                        </li>
                    </ul>
                    <p style={paragraphStyle}>
                        Your decision to donate blood is a selfless act that directly contributes to the well-being of others. Join us in making a positive impact through the simple yet powerful act of blood donation.
                    </p>
                </Col>
            </Row>

            {/* Footer */}
            <Container fluid style={footerStyle}>
                <Row>
                    <Col md={12}>

                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} style={socialIconStyle} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={socialIconStyle} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={socialIconStyle} />
                        </a>

                        <p style={{ color: 'white' }}>&copy; 2023 Your Website. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default AboutUs;
