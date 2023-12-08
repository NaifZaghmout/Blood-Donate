// ContactUs.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    const [contactInfoHovered, setContactInfoHovered] = useState(false);
    const [messageFormHovered, setMessageFormHovered] = useState(false);

    const sectionStyle = {
        marginTop: '70px',
        textAlign: 'center',
    };

    const contactInfoStyle = {
        padding: '30px',
        borderRadius: '10px',
        color: 'white',
        transition: 'background-color 0.3s',
    };

    const messageFormStyle = {
        padding: '30px',
        borderRadius: '10px',
        color: 'white',
        marginTop: '20px',
        transition: 'background-color 0.3s',
    };

    const sendMessageButtonStyle = {
        transition: 'transform 0.3s',
    };

    const handleContactInfoHover = () => {
        setContactInfoHovered(!contactInfoHovered);
    };

    const handleMessageFormHover = () => {
        setMessageFormHovered(!messageFormHovered);
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
            {/* Section 1: Contact Information */}
            <Row>
                <Col md={12} className="text-center">
                    <h2 className="text-danger mt-2">Contact Information</h2>
                    <div
                        style={{
                            ...contactInfoStyle,
                            background: contactInfoHovered ? 'purple' : 'darkorchid',
                        }}
                        onMouseEnter={handleContactInfoHover}
                        onMouseLeave={handleContactInfoHover}
                    >
                        <p>
                            <strong>Phone:</strong> +1 (555) 123-4567
                        </p>
                        <p>
                            <strong>Address:</strong> 123 Main Street, Cityville, State, Zip Code
                        </p>
                        <p>
                            <strong>Email:</strong> info@blooddonation.org
                        </p>
                    </div>
                </Col>
            </Row>

            {/* Section 2: Send Us a Message Form */}
            <Row>
                <Col md={12} className="text-center">
                    <h2 className="text-danger mt-4">Send Us a Message</h2>
                    <Form
                        style={{
                            ...messageFormStyle,
                            background: messageFormHovered ? 'purple' : 'darkorchid',
                        }}
                        onMouseEnter={handleMessageFormHover}
                        onMouseLeave={handleMessageFormHover}
                    >
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
                        </Form.Group>


                        <Button
                            variant="light"
                            type="submit"
                            style={{
                                ...sendMessageButtonStyle,
                                background: 'white',
                                color: 'darkorchid',
                                transform: sendMessageButtonStyle.transform ? 'scale(1.1)' : 'scale(1)',
                                marginTop: '20px',
                            }}
                        >
                            Send Message
                        </Button>

                    </Form>
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

export default ContactUs;