import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import "../style/User.css";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function User() {
  const [step, setStep] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    patient_name: "",
    patient_email: "",
    patient_phone_number: "",
    patient_blood_type: "",
    patient_health_information: "",
  });
  const [error, setError] = useState({
    patient_name_Error: "",
    patient_email_Error: "",
    patient_phone_number_Error: "",
    patient_blood_type_Error: "",
    patient_health_information_Error: "",
  });
  setTimeout(() => setLoading(false), 3000);
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  const nextStep = () => {
    setStep(step + 1);
  };
  const validationSubmit = (e) => {
    e.preventDefault();
    const tempError = {
      patient_name_Error: !formData?.patient_name && "Name field is required",
      patient_email_Error:
        !formData?.patient_email && "Email field is required",
      patient_phone_number_Error:
        !formData?.patient_phone_number && "Phone field is required",
      patient_blood_type_Error:
        !formData?.patient_blood_type && "Blood field is required",
      patient_health_information_Error:
        !formData?.patient_health_information && "Health field is required",
    };
    setError(tempError);
    if (tempError.patient_email_Error || tempError.patient_phone_number_Error) {
      return;
    }
    if (Object.values(tempError).filter((value) => value).length === 0) {
      handleSubmit(e);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("api/createpatientblood/", formData);
      setLoading(false);
      setStep(4);
      setFormData({});
    } catch (error) {
      setLoading(false);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    let emailError = "";
    let phoneNumberError = "";

    if (name === "patient_email" && value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        emailError = "Invalid email address";
      }
    }
    if (name === "patient_phone_number" && value.trim() !== "") {
      const phoneNumberRegex = /^\d{10,}$/; // Adjust the regex as needed for your validation
      if (!phoneNumberRegex.test(value)) {
        phoneNumberError = "Invalid phone number";
      }
    }
    setError((prevError) => ({
      ...prevError,
      [`${name}_Error`]: !value
        ? `${name.replace("_", " ")} field is required`
        : name === "patient_email"
        ? emailError
        : name === "patient_phone_number"
        ? phoneNumberError
        : "",
    }));
  };
  if (isLoading) {
    return <Loader />;
  }




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
          <p className="message-text">By proceeding to the application, you re taking a significant step towards saving lives. Your willingness to donate blood makes you a hero in the eyes of those who need it most. Are you ready to make this noble commitment?</p>
          <Button className="next-button" onClick={nextStep}>Yes, I am Ready</Button>

        </div>

      )}

      {step === 3 && (
        <Form onSubmit={validationSubmit} className="donation-form">
        <h1 className="form-header">Blood Donation Application</h1>
        <FormGroup className="form-group-item">
          <FormLabel htmlFor="patientName">Name</FormLabel>
          <FormControl
            type="text"
            id="patientName"
            name="patient_name"
            value={formData.patient_name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            // required
          />
          <span
            style={{
              color: "#D14F4F",
              display: "flex",
              justifyContent: "end",
              fontSize: "14px",
              marginRight: "27px",
              opacity: error.patient_name_Error ? 1 : 0,
            }}
          >
            {error.patient_name_Error ?? "valid"}
          </span>
        </FormGroup>
        <FormGroup className="form-group-item">
          <FormLabel htmlFor="patientEmail">Email</FormLabel>
          <FormControl
            type="email"
            id="patientEmail"
            name="patient_email"
            value={formData.patient_email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            // required
          />
          <span
            style={{
              color: "#D14F4F",
              display: "flex",
              justifyContent: "end",
              fontSize: "14px",
              marginRight: "27px",
              opacity: error.patient_email_Error ? 1 : 0,
            }}
          >
            {error.patient_email_Error ?? "valid"}
          </span>
        </FormGroup>
        <FormGroup className="form-group-item">
          <FormLabel htmlFor="patientPhone">Phone Number</FormLabel>
          <FormControl
            // type="text"
            type="tel"
            id="patientPhone"
            name="patient_phone_number"
            value={formData.patient_phone_number}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            // required
          />
          <span
            style={{
              color: "#D14F4F",
              display: "flex",
              justifyContent: "end",
              fontSize: "14px",
              marginRight: "27px",
              opacity: error.patient_phone_number_Error ? 1 : 0,
            }}
          >
            {error.patient_phone_number_Error ?? "valid"}
          </span>
        </FormGroup>

       
        <FormGroup className="form-group-item">
            <FormLabel htmlFor="patinetBlood">Blood Type</FormLabel>
            <Form.Select
              aria-label="Default select example"
              id="patinetBlood"
              name="patient_blood_type"
              value={formData.patient_blood_type}
              onChange={handleChange}
              placeholder="Enter Your Blood Type"
            > 
              <option>Select blood type</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </Form.Select>
            <span
              style={{
                color: "#D14F4F",
                display: "flex",
                justifyContent: "end",
                fontSize: "14px",
                marginRight: "27px",
                opacity: error.patient_blood_type_Error ? 1 : 0,
              }}
            >
              {error.patient_blood_type_Error ?? "valid"}
            </span>
          </FormGroup>

        <FormGroup className="form-group-item">
          <FormLabel htmlFor="patienthealth">Health Information</FormLabel>
          <FormControl
            as="textarea"
            id="patienthealth"
            name="patient_health_information"
            value={formData.patient_health_information}
            onChange={handleChange}
            rows={3}
            placeholder="Write About Your Health Condition"
            // required
          />
          <span
            style={{
              color: "#D14F4F",
              display: "flex",
              justifyContent: "end",
              fontSize: "14px",
              marginRight: "27px",
              opacity: error.patient_health_information_Error ? 1 : 0,
            }}
          >
            {error.patient_health_information_Error ?? "valid"}
          </span>
        </FormGroup>
        <Button
          type="submit"
          // disabled={!isFormFilled()}
          className="submit-button"
        >
          Submit Application
        </Button>
      </Form>
      )}

      {step === 4 && (
        <div className="message-box">
          <h1 className="message-header">Application Submitted</h1>
          <p className="message-text">
            Your application has been submitted successfully, and our staff will contact you soon. We are proud of your decision to donate blood and help those in need. Your generosity makes a real difference.
          </p>
          <Button className="home-button" onClick={goToHomePage}>
            Back to Home
          </Button>
        </div>
      )}
    </div>
  );
}


export default User;
