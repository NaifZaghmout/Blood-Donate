import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import '../style/AboutUs.css';




const AboutUs = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container className="about-section">
            <Row>
                <Col md={12} className="text-center">
                    <h2 className="text-danger mt-2">About Our Organization</h2>
                    <Image
                        src="https://res.cloudinary.com/dusc2x8ri/image/upload/v1701437640/pexels-puwadon-sangngern-5340280_otvusk.jpg"
                        alt="Blood Donation Organization"
                        roundedCircle
                        fluid
                        className="about-image"
                    />
                    <p className="about-paragraph">
                        Welcome to our Blood Donation Organization! We are a dedicated group of individuals committed to making a positive impact on the health and well-being of our community. Our mission is simple yet powerful: to save lives through the promotion of blood donation and ensuring a safe and sufficient blood supply for those in need.
                    </p>
                    <p className="about-paragraph">
                        Over the years, our organization has grown, and we've witnessed the incredible generosity of donors, the dedication of volunteers, and the expertise of healthcare professionals. Together, we form a united front against health challenges, and we strive to create a community where the act of giving blood becomes a symbol of compassion, solidarity, and hope.
                    </p>
                    <p className="about-paragraph">
                        At the core of our organization are values such as empathy, integrity, and community service. We believe that every individual has the power to make a difference, and through blood donation, we can collectively contribute to a healthier and happier world.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col md={12} className="text-center">
                    <h2 className="text-danger mt-4">Why We Help</h2>
                    <p className="about-paragraph">
                        At our organization, we firmly believe in the life-saving power of blood donation. Every drop of blood donated has the potential to make a significant difference in someone's life. We are passionate about helping people through blood donation for various compelling reasons.
                    </p>
                    <ul className="about-list">
                        <li className="about-paragraph">
                            <strong>Emergency Situations:</strong> In critical situations such as accidents, surgeries, and natural disasters, rapid access to blood can be a matter of life and death. By donating, you become a crucial link in the chain of emergency healthcare.
                        </li>
                        <li className="about-paragraph">
                            <strong>Medical Treatments:</strong> Many medical conditions, including cancer and chronic illnesses, require regular blood transfusions. Donors play a vital role in supporting patients undergoing treatment, offering hope and a chance for recovery.
                        </li>
                        <li className="about-paragraph">
                            <strong>Community Support:</strong> Blood donation is not just a medical act; it's a community endeavor. It fosters a sense of unity and care within the community, creating bonds that go beyond individual donations.
                        </li>
                        <li className="about-paragraph">
                            <strong>Global Impact:</strong> Blood donation is a global effort. By contributing, our donors become part of a worldwide network that collectively addresses health challenges and supports humanitarian efforts, making a positive impact on a global scale.
                        </li>
                    </ul>
                    <p className="about-paragraph">
                        Your decision to donate blood is a selfless act that directly contributes to the well-being of others. Join us in making a positive impact through the simple yet powerful act of blood donation.
                    </p>
                </Col>
            </Row>

            <Footer /> {/* Include the Footer component */}
        </Container>
    );
};

export default AboutUs;