import React, { useState, useEffect } from "react";
import {
  Form,
  Button
} from "react-bootstrap";
import "../style/User.css";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import "../style/Donor.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";



const UpdateDonor = () => {
  let { Donorid } = useParams();
  // console.log("Donorid-------------", Donorid);
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

        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        // const data = await response.json();

        // console.log("data-----------cccccc---------------", data);

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

        // Handle the fetched data, e.g., update state
        // setYourStateVariable(data);
      } catch (error) {
        console.error("Error:", error);
        // Handle errors, e.g., set an error state
      }
    };

    // Call the fetchData function
    fetchData();
  }, [Donorid, rednder, rednder2, nameData]); // Add Donorid to the dependency array to fetch data when Donorid changes
