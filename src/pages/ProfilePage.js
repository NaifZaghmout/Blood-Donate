import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../style/ProfilePage.css";
import axios from "axios";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [render, setRender] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [profileBio, setProfileBio] = useState("");

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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `profile/userproile-detail/${storedProfileInfo?.data?.user_id}/`
        );
        setProfileData(response.data);
        setProfileBio(response?.data?.bio);
      } catch (error) {
        console.log("error---", error);
      }
    };

    fetchData();
  }, [render]);