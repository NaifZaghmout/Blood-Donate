import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../style/ProfilePage.css";
import axios from "axios";
import Loader from '../components/Loader';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [render, setRender] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [profileBio, setProfileBio] = useState("");


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
      }, 2000);
  }, []);

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  const storedProfileInfo = JSON.parse(localStorage.getItem("UserData"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("bio", profileBio);
    if (profileImage != null) {
      formData.append("avatar", profileImage);
    }

    try {
      await axios.put(
        `profile/update-profile/${storedProfileInfo?.data?.user_id}/`,
        formData
      );

      setIsEditing(false);
      setRender(true)
      window.location.reload()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `profile/userprofile-detail/${storedProfileInfo?.data?.user_id}/`
        );
        setProfileData(response.data);
        // setProfileBio(response?.data?.bio);
        setProfileBio(response?.data?.bio || "");
      } catch (error) {
        console.log("error---", error);
      }
    };

    fetchData();
  }, [render]);


  
  if (isLoading) {
    return <Loader />;
}



  return (
    <>
      <div className="container profile-conatiners">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center profile-image-section">
                    {isEditing ? (<>
                      <label  className="btn btn-primary" htmlFor="avatarInput"> Upload image..</label>
                      
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="avatarInput"
                    
                        onChange={(e) => setProfileImage(e.target.files[0])}
                      />
                      </>
                    ) : null}
                    {/* <label htmlFor="avatarInput"> */}
                      {profileImage != null ? (
                        <>
                          <img
                            src={URL.createObjectURL(profileImage)}
                            alt="Admin"
                            className="rounded-circle profileimage-upload"
                            width="150"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={profileData?.avatar ?? "https://bootdey.com/img/Content/avatar/avatar7.png" }
                            alt="Profile"
                            className="rounded-circle profileimage-upload"
                            width="150"
                            style={{ cursor: "pointer" }}
                          />
                        </>
                      )}
                    {/* </label> */}
                    <div className="mt-3">
                      <h4>{profileData?.username ?? "N/A"}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email Id</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profileData?.email ?? "N/A"}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Staff Id</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profileData?.staff_id ?? "N/A"}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Bio</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {isEditing ? (
                        <>
                          <InputGroup>
                            <Form.Control
                              as="textarea"
                              aria-label="With textarea"
                              name="bio"
                              value={profileBio}
                              onChange={(e) => setProfileBio(e.target.value)}
                              autoComplete="off"
                            />
                          </InputGroup>
                        </>
                      ) : (
                        profileData?.bio ?? "N/A"
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      {isEditing ? (
                        <button
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={handleClick}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
