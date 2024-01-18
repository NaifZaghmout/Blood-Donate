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

  // useEffect(() => {
  //   let userData = [];
  //   if (DataShow) {
  //     userData = DataShow.map((item) => {
  //       item.name = item.patient_name;
  //       item.email = item.patient_email;
  //       item.phone_no = item.patient_phone_number;
  //       item.blood_type = item.patient_blood_type;
  //       item.health_information = item.patient_health_information;
  //       item.action = (
  //         <div key={item?.id} style={{ display: "flex", justifyContent: "center" }}>
  //           <div style={{ display: "flex" }}>
  //              <Link to={`/update-donor/${item?.id}`}>
  //               <button title="Edit" className="newbtn44">
  //                 <p className="editiconDelete1 m-2">
  //                   {" "}
  //                   <i className="fa fa-eye"></i>
  //                 </p>
  //               </button>
  //             </Link>
  //             <button title="Delete" className="newbtn44 iconbtn">
  //               <p
  //                 className="editiconDelete1 m-2"
  //               onClick={() => handleDelete(item.id)}
  //               >
  //                 <i className="fa fa-trash"></i>
  //               </p>
  //             </button>
  //           </div>
  //         </div>
  //       );


  //       return item; 
  //     });
  //   }



  //   setUsersForRender(userData);
  // }, [DataShow])



  
useEffect(() => {
  let userData = [];

  if (DataShow) {
    userData = DataShow.map((item) => {
      // Limit the display of Name to 10 characters for small screens
      const nameDisplay = (
        <span className="d-inline-block d-md-none">
          {item.patient_name.slice(0, 5)} {/* Limit to 10 characters */}
        </span>
      );

      // Limit the display of Email to 10 characters for small screens
      const emailDisplay = (
        <span className="d-inline-block d-md-none">
          {item.patient_email.slice(0, 5)} {/* Limit to 10 characters */}
        </span>
      );

      const phoneDisplay = (
        <span className="d-inline-block d-md-none">
          {item.patient_phone_number.slice(0, 5)} {/* Limit to 10 characters */}
        </span>
      );

      // Limit the display of Health Information to 10 characters for small screens
      const healthInfoDisplay = (
        <span className="d-inline-block d-md-none">
          {item.patient_health_information.slice(0, 5)} {/* Limit to 10 characters */}
        </span>
      );

      item.action = (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex" }}>
            <Link to={`/update-donor/${item?.id}`}>
              <button title="Edit" className="newbtn44">
                <p className="editiconDelete1 m-2">
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

      return {
        ...item,
        name: (
          <>
            {nameDisplay}
            {/* Display full name for larger screens (md and above) */}
            <span className="d-none d-md-inline-block">
              {item.patient_name}
            </span>
          </>
        ),
        email: (
          <>
            {emailDisplay}
            {/* Display full email for larger screens (md and above) */}
            <span className="d-none d-md-inline-block">
              {item.patient_email}
            </span>
          </>
        ), 
        phone_no: (
          <>
            {phoneDisplay}
            {/* Display full phone number for larger screens (md and above) */}
            <span className="d-none d-md-inline-block">
              {item.patient_phone_number}
            </span>
          </>
        ),
        blood_type: item.patient_blood_type,
        health_information: (
          <>
            {healthInfoDisplay}
            {/* Display full health information for larger screens (md and above) */}
            <span className="d-none d-md-inline-block">
              {item.patient_health_information}
            </span>
          </>
        ),
      };
    });
  }

  setUsersForRender(userData);

  var searchElements = document.querySelectorAll('.form-control.form-control-sm.ml-0.my-1');
searchElements.forEach(function(element) {
element.setAttribute('name', 'search');
});

var selectElements = document.querySelectorAll('.custom-select.custom-select-sm.form-control.form-control-sm');
selectElements.forEach(function(element) {
element.setAttribute('name', 'select');
})
}, [DataShow]);

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
