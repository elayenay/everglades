import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { LOGIN } from "../context/actions";

const Register = () => {
  const [state,dispatch] = useGlobalContext();
  const history = useHistory();

  const regEmailRef = useRef();
  const regPasswordRef = useRef();

  const doSignup = async() => {
    const { data } = await axios.post("/auth/login", {
      email: regEmailRef.current.value,
      password: regPasswordRef.current.value
    });

    console.log(data);
    // save the authenticated user data in local storage
    localStorage.setItem('authUser', JSON.stringify(data));
    dispatch({
      type: LOGIN,
      user: data
    })
  }
  

  const handleSignup = (e) => {
    e.preventDefault();
    doSignup();
    history.push("/");
  }
  const styles = {
        center: {
            textAlign: "center"
        },
        widths: {
            width: "100%"
        }
  }


  return (
    <div className="container">
        <div className="row justify-content-center">
            <form className="justify-content-center inputform login" onSubmit={handleSignup}>
                <h2 style={styles.center}>Register for Sizzle</h2>
                <p style={styles.center}>Already on Sizzle?  <Link to="/">log in</Link></p>
                  <div className="form-group">
                      <label for="exampleInputEmail1">Username</label>
                      <input type="email" className="form-control" id="email-input" placeholder="Enter your email" ref={regEmailRef} required/>
                  </div>
                  <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="password-input" placeholder="Enter your password" ref={regPasswordRef} required/>
                  </div>
                  <div className="justify-content-center">
                      <button type="submit" className="btn btn-primary " style={styles.widths}>Log in</button>
                  </div>
                  <small className="subtle-text">Create account?  <Link to="/">log in</Link></small>
            </form>
        </div>
    </div>
  )
}

export default Register;