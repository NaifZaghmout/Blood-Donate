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
              editedData.patient_health_information || "",
          });
        }

      } catch (error) {
        console.error("Error:", error);
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
      const response = await axios.put(`api/resolve/${Donorid}/`,formData );
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
      console.error("Error:", error);
    }
  };

  const handleCross = (e) => {
    e.preventDefault();
    setNameData("");
    setRender2(true);
  };

;

  const hanldeEditShow = (e, name) => {
    e.preventDefault();
    setNameData(name);
  };
