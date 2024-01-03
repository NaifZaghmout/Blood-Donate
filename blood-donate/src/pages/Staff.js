import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/staff.css";
import { MDBDataTable } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

const Staff = () => {
  const [DataShow, setDataShow] = useState([]);
  const [usersForRender, setUsersForRender] = useState([]);


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

  useEffect(() => {
    let userData = [];



    if (DataShow) {
      userData = DataShow.map((item, index) => {
        item.name = item.patient_name;
        item.email = item.patient_email;
        item.phone_no = item.patient_phone_number;
        item.blood_type = item.patient_blood_type;
        item.health_information = item.patient_health_information;
       


        return item; 
      });
    }



    setUsersForRender(userData);
  }, [DataShow])


  const data1 = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Phone No.",
        field: "phone_no",
        sort: "asc",
        width: 500,
      },
      {
        label: "Blood Type",
        field: "blood_type",
        sort: "asc",
        width: 500,
      },
      {
        label: "Health Information",
        field: "health_information",
        sort: "asc",
        width: 500,
      },
    ],
    rows: usersForRender,
  };


  return (
    <div className="user-form-container-staff stafftopdiv">
      <div className="message-box staffdiv">
        <h1 className="message-header">DONORS LIST</h1>
        <div className="center-section">
          <MDBDataTable
            style={{}}
            responsive
            striped
            bordered
            small
            data={data1}
          />
        </div>
      </div>
    </div>
  );
};

export default Staff;
