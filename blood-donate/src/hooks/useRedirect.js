import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirect = (userAuthStatus) => {
  const navigate = useNavigate();



  useEffect(() => {

    const userDataString = localStorage.getItem('UserData');

    if(userDataString){
      
      const datalocaShow=JSON.parse(userDataString)

      console.log("userDataString---------",JSON.parse(userDataString)?.data?.username)
      const dataShow=datalocaShow?.data?.username

      const formData = new FormData()
      formData.append("username",dataShow)




    const handleMount = async () => {
      try {
        const response = await axios.post("api/check-user-logged-in/",formData);
        console.log("response--redirect---",response)
        if (userAuthStatus === "loggedIn") {
          navigate("/");
        }
      } catch (err) {
        console.log("err--redirect---",err)
        if (userAuthStatus === "loggedOut") {
          navigate("/");
        }
      }
    };

    handleMount();
  }
  }, [navigate, userAuthStatus]);
};