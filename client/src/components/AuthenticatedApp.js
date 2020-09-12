import React, {useEffect} from "react";
import { useGlobalContext } from "../context/GlobalContext";
import {
  LOGOUT, GET_WELCOME
} from "../context/actions";
import Profile from "../pages/Profile/profile"
import Navbar from "../pages/Navbar/Navbar"
import axios from "axios";
import { BrowserRouter as Router} from "react-router-dom";


const AuthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  const getWelcome = async() => {
    const { data } = await axios.get("/api/welcome", {
      headers: {
        Authorization: `Bearer ${state.user.token}`
      }
    });
    
    console.log(data)
    dispatch({
      type: GET_WELCOME,
      welcomeMessage: data
    });
  }

  useEffect(()=>{
    getWelcome();
  }, [])

  const handleLogout = () => {
    // remove the user from localStorage
    localStorage.removeItem('authUser');  
    // remove the user from the state
    dispatch({
      type: LOGOUT
    });
  }

  return (
    <div>
      {/* {state.welcomeMessage ? <p>{state.welcomeMessage}</p> : <p>Hello</p>} */}
      <Router>
        <Navbar/>
        <Profile />
      </Router>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AuthenticatedApp;