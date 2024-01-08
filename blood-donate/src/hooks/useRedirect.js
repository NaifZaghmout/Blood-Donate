import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirect = (userAuthStatus) => {
  const navigate = useNavigate();



  useEffect(() => {

    const userDataString = localStorage.getItem('UserData');

    if(userDataString){
      
      const datalocaShow=JSON.parse(userDataString)

      const dataShow=datalocaShow?.data?.username

      const formData = new FormData()
      formData.append("username",dataShow)




    const handleMount = async () => {
      try {
      await axios.post("api/check-user-logged-in/",formData);
        if (userAuthStatus === "loggedIn") {
          navigate("/");
        }
      } catch (err) {
        // console.log("err--redirect---",err)
        if (userAuthStatus === "loggedOut") {
          navigate("/");
        }
      }
    };

    handleMount();
  }
  }, [navigate, userAuthStatus]);
};