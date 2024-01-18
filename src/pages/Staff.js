import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/staff.css";
import { MDBDataTable } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";



const Staff = () => {
  const [DataShow, setDataShow] = useState([]);
  const [usersForRender, setUsersForRender] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/listpatients/");
        setDataShow(response.data);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`api/delete/${id}/`);

      if (response.status !== 204) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      swal({
        title: "Deleted",
        text: "Deleted Successfully",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
      setTimeout(() => {
        setDataShow((prevData) => prevData.filter((item) => item.id !== id));
      }, 2000);
    } catch (error) {
      // console.error("Error:", error);
    }
  };

  useEffect(() => {
    let userData = [];



    if (DataShow) {
      userData = DataShow.map((item) => {
        item.name = item.patient_name;
        item.email = item.patient_email;
        item.phone_no = item.patient_phone_number;
        item.blood_type = item.patient_blood_type;
        item.health_information = item.patient_health_information;
        item.action = (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex" }}>
               <Link to={`/update-donor/${item?.id}`}>
                <button title="Edit" className="newbtn44">
                  <p className="editiconDelete1 m-2">
                    {" "}
                    <i className="fa fa-eye"></i>
                  </p>
                </button>
              </Link>
              <button title="Delete" className="newbtn44 iconbtn">
                <p
                  className="editiconDelete1 m-2"
                onClick={() => handleDelete(item.id)}
                >
                  <i className="fa fa-trash"></i>
                </p>
              </button>
            </div>
          </div>
        );


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
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
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
