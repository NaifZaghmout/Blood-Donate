import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/staff.css";

const Staff = () => {
  const [DataShow, setDataShow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/listpatients/");
        setDataShow(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-form-container-staff stafftopdiv">
      <div className="message-box staffdiv">
        <h1 className="message-header">DONORS LIST</h1>
        <div className="center-section">
          {/* Placeholder for displaying data */}
        </div>
      </div>
    </div>
  );
};

export default Staff;
