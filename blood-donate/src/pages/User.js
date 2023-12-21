import React, { useState } from 'react';
import { Form, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import '../style/User.css';
import Loader from '../components/Loader';



function User() {
  const [step, setStep] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    patient_name: '',
    patient_email: '',
    patient_phone_number: '',
    patient_blood_type: '',
    patient_health_information: ''
  });


  setTimeout(() => setLoading(false), 3000);


  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch('https://8000-naifzaghmou-blooddonate-8h80369qfat.ws-us107.gitpod.io/createpatientblood/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  if (isLoading) {
    return <Loader />;
  }

  const isFormFilled = () => {
    return formData.patient_name && formData.patient_email && formData.patient_phone_number && formData.patient_blood_type && formData.patient_health_information;
  };




  return (
    <div className="user-form-container">


      {step === 1 && (
        <div className="message-box">
          <h1 className="message-header">Make a Difference with Your Donation</h1>
          <p className="message-text">Your decision to donate blood can save lives. Every drop counts, and your contribution is invaluable in helping those in need. Thank you for considering this selfless act of kindness.</p>
          <Button className="next-button" onClick={nextStep}>Next</Button>
        </div>
      )}

      {step === 2 && (
        <div className="message-box">
          <h1 className="message-header">Ready to Be a Hero?</h1>
          <p className="message-text">By proceeding to the application, you're taking a significant step towards saving lives. Your willingness to donate blood makes you a hero in the eyes of those who need it most. Are you ready to make this noble commitment?</p>
          <Button className="next-button" onClick={nextStep}>Yes, I'm Ready</Button>

        </div>

      )}

      {step === 3 && (
        <Form onSubmit={handleSubmit} className="donation-form">
          <h1 className="form-header">Blood Donation Application</h1>
          <FormGroup className="form-group-item">
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              name="patient_name"
              value={formData.patient_name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="form-group-item">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              name="patient_email"
              value={formData.patient_email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="form-group-item">
            <FormLabel>Phone Number</FormLabel>
            <FormControl
              type="text"
              name="patient_phone_number"
              value={formData.patient_phone_number}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="form-group-item">
            <FormLabel>Blood Type</FormLabel>
            <FormControl
              type="text"
              name="patient_blood_type"
              value={formData.patient_blood_type}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="form-group-item">
            <FormLabel>Health Information</FormLabel>
            <FormControl
              as="textarea"
              name="patient_health_information"
              value={formData.patient_health_information}
              onChange={handleChange}
              rows={3}
              required
            />
          </FormGroup>
          <Button
            type="submit"
            disabled={!isFormFilled()}
            className="submit-button"
          >
            Submit Application
          </Button>
        </Form>
      )}
    </div>
  );
}

export default User;
