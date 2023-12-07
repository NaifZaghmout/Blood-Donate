// ContactUs.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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

   
   
    const handleContactInfoHover = () => {
        setContactInfoHovered(!contactInfoHovered);
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

            
        </Container>



    );
};


export default ContactUs;