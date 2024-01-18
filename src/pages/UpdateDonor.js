import React, { useState, useEffect } from "react";
import {
  Form,
  Button
} from "react-bootstrap";
import "../style/User.css";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/Donor.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";

const UpdateDonor = () => {
  let { Donorid } = useParams();
  const [nameData, setNameData] = useState("");
  const [rednder, setRender] = useState(false);
  const [rednder2, setRender2] = useState(false);
  const [formData, setFormData] = useState({
    patient_name: "",
    patient_email: "",
    patient_phone_number: "",
    patient_blood_type: "",
    patient_health_information: "",
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/patient-blood/${Donorid}/`);

        if (response?.data) {
          const editedData = response?.data;

          setFormData({
            patient_name: editedData.patient_name || "",
            patient_email: editedData.patient_email || "",
            patient_phone_number: editedData.patient_phone_number || "",
            patient_blood_type: editedData.patient_blood_type || "",
            patient_health_information:
              editedData.patient_health_information || ""
          });
        }

      } catch (error) {
        console.error("Error:", error)
      }
    };

    fetchData();
  }, [Donorid, rednder, rednder2, nameData]); 


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      await axios.put(`api/resolve/${Donorid}/`,formData );
      swal({
        title: "Updated",
        text: "Updated Successfully",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
      setNameData("");
      setRender(true);
    } catch (error) {
      // console.error("Error:", error);
    }
  };

  const handleCross = (e) => {
    e.preventDefault();
    setNameData("");
    setRender2(true);
  };



  const hanldeEditShow = (e, name) => {
    e.preventDefault();
    setNameData(name);
  };

  return (
    <>
    <div>
    <h1 className="donorHeading">DONORS INFORMATION</h1>
    </div>
      <div className="user-form-container-donor">
        <Link to="/staff">
          <Button>Back</Button>
        </Link>
        <Form>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Name :
            </Form.Label>
            <Col className="d-flex" sm="10">
              <Form.Control
                type="text"
                name="patient_name"
                value={formData.patient_name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
                disabled={nameData !== "name"}
              />
              {nameData !== "name" ? (
                <Button title="Edit" onClick={(e) => hanldeEditShow(e, "name")}>
                  <i className="fas fa-pencil-alt"></i>
                </Button>
              ) : (
                <>
                  <Button title="Save" onClick={(e) => handleSubmit(e)}>
                    <i className="fa fa-save"></i>
                  </Button>
                  <Button title="Close" onClick={(e) => handleCross(e)}>
                    <i className="fa fa-remove"></i>
                  </Button>
                </>
              )}
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col className="d-flex" sm="10">
              <Form.Control
                type="email"
                name="patient_email"
                value={formData.patient_email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                disabled={nameData !== "email"}
              />
              {nameData !== "email" ? (
                <Button title="Edit" onClick={(e) => hanldeEditShow(e, "email")}>
                  <i className="fas fa-pencil-alt"></i>
                </Button>
              ) : (
                <>
                  <Button title="Save" onClick={(e) => handleSubmit(e)}>
                    <i className="fa fa-save"></i>
                  </Button>
                  <Button title="Close">
                    <i className="fa fa-remove" onClick={(e) => handleCross(e)}></i>
                  </Button>
                </>
              )}
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Phone Number
            </Form.Label>
            <Col className="d-flex" sm="10">
              <Form.Control
                type="text"
                name="patient_phone_number"
                value={formData.patient_phone_number}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                required
                disabled={nameData !== "phone"}
              />
              {nameData !== "phone" ? (
                <Button title="Edit" onClick={(e) => hanldeEditShow(e, "phone")}>
                  <i className="fas fa-pencil-alt"></i>
                </Button>
              ) : (
                <>
                  <Button title="Save" onClick={(e) => handleSubmit(e)}>
                    <i className="fa fa-save"></i>
                  </Button>
                  <Button title="Close">
                    <i className="fa fa-remove" onClick={(e) => handleCross(e)}></i>
                  </Button>
                </>
              )}
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Blood Type
            </Form.Label>
            <Col className="d-flex" sm="10">
              <Form.Control
                type="text"
                name="patient_blood_type"
                value={formData.patient_blood_type}
                onChange={handleChange}
                placeholder="Enter Your Blood Type"
                required
                disabled={nameData !== "bloodtype"}
              />
              {nameData !== "bloodtype" ? (
                <Button title="Edit" onClick={(e) => hanldeEditShow(e, "bloodtype")}>
                  <i className="fas fa-pencil-alt"></i>
                </Button>
              ) : (
                <>
                  <Button title="Save" onClick={(e) => handleSubmit(e)}>
                    <i className="fa fa-save"></i>
                  </Button>
                  <Button title="Close">
                    <i className="fa fa-remove" onClick={(e) => handleCross(e)}></i>
                  </Button>
                </>
              )}
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Health Information
            </Form.Label>
            <Col className="d-flex" sm="10">
              <Form.Control
                as="textarea"
                name="patient_health_information"
                value={formData.patient_health_information}
                onChange={handleChange}
                rows={3}
                placeholder="Write About Your Health Condition"
                required
                disabled={nameData !== "health"}
              />
              {nameData !== "health" ? (
                <Button title="Edit" onClick={(e) => hanldeEditShow(e, "health")}>
                  <i className="fas fa-pencil-alt"></i>
                </Button>
              ) : (
                <>
                  <Button title="Save" onClick={(e) => handleSubmit(e)}>
                    <i className="fa fa-save"></i>
                  </Button>
                  <Button title="Close">
                    <i className="fa fa-remove" onClick={(e) => handleCross(e)}></i>
                  </Button>
                </>
              )}
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default UpdateDonor;
