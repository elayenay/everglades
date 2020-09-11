import React, {useRef} from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGIN } from "../context/actions";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "../pages/Register";

const Login = () => {
const [state,dispatch] = useGlobalContext();

  const emailRef = useRef();
  const passwordRef = useRef();

  const doLogin = async() => {
    const { data } = await axios.post("/auth/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value
    });

    console.log(data);
    // save the authenticated user data in local storage
    localStorage.setItem('authUser', JSON.stringify(data));
    // save the authenticated user data in local storage
    dispatch({
      type: LOGIN,
      user: data
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin();
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
    <Router>
          <Route exact path="/">
              <div className="container">
                  <div className="row justify-content-center">
                      <form className="justify-content-center inputform login" onSubmit={handleSubmit}>
                          <h2 style={styles.center}>Log in to Sizzle</h2>
                          <p style={styles.center}>Create account?  <Link to="/register">register</Link></p>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="email" className="form-control" id="email-input" placeholder="Enter your email" ref={emailRef}/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password-input" placeholder="Enter your password" ref={passwordRef}/>
                            </div>
                            <div className="justify-content-center">
                                <button type="submit" className="btn btn-primary " style={styles.widths}>Log in</button>
                            </div>
                            <small className="subtle-text">Create account?  <Link to="/register">register</Link></small>
                      </form>
                  </div>
              </div>
            {/* <p>Please enter your information to login:</p>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" ref={emailRef} />
            <input type="text" placeholder="password" ref={passwordRef} />
            <button type="submit">Submit</button>
            </form>
            <p>
            If you don't have an account create one <Link to="/register">here</Link>.
            </p> */}
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Router>
  )
}

export default Login;