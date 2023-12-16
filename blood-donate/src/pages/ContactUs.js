// ContactUs.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import '../style/ContactUs.css';







const ContactUs = () => {
    const [isLoading, setLoading] = useState(true);
    const [contactInfoHovered, setContactInfoHovered] = useState(false);
    const [messageFormHovered, setMessageFormHovered] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, [location]);

    const handleContactInfoHover = () => setContactInfoHovered(!contactInfoHovered);
    const handleMessageFormHover = () => setMessageFormHovered(!messageFormHovered);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container className="contact-section">
            <Row>
                <Col md={12} className="text-center">
                    <h2 className="text-danger mt-2">Contact Information</h2>
                    <div
                        className={`contact-info ${contactInfoHovered ? 'hovered' : ''}`}
                        onMouseEnter={handleContactInfoHover}
                        onMouseLeave={handleContactInfoHover}
                    >
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Address:</strong> 123 Main Street, Cityville, State, Zip Code</p>
                        <p><strong>Email:</strong> info@blooddonation.org</p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={12} className="text-center">
                    <h2 className="text-danger mt-4">Send Us a Message</h2>
                    <Form
                        className={`message-form ${messageFormHovered ? 'hovered' : ''}`}
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

                        <Button className="send-message-btn" type="submit">
                            Send Message
                        </Button>

                    </Form>
                </Col>
            </Row>

            <Footer /> {/* This line adds the footer to your page */}
        </Container>
    );
};

export default ContactUs;