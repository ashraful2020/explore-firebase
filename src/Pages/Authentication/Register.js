import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Register = () => {
    const [authenticationData, setAuthenticationData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const uri = location?.state?.from?.pathname || "/home";
  const { signInWithGoogle, setUser } = useAuth();

  // Googel SignIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((response) => {
        setUser(response.user);
        history.push(uri);
        console.log(response.user.displayName);
      })
      .catch((error) => console.log(error.message));
  };

  const handleData = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newAuthenticationData = { ...authenticationData};
    newAuthenticationData[field] = value
    setAuthenticationData(newAuthenticationData) ;
  };

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    console.log(authenticationData)
  }
  return (
    <div>
      <Form className="w-50 mx-auto mt-5" onSubmit={handleOnSubmit}>
        <Form.Control
          className="mt-4 p-3"
          onBlur={handleData}
          name="name"
          type="text"
          placeholder="Enter name"
        />
        <Form.Control
          className="mt-4 p-3"
          onBlur={handleData}
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <Form.Control
          className="mt-4 p-3"
          onBlur={handleData}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Already Register<Link to="/login">please Login</Link>
      </p>
      <button onClick={handleGoogleSignIn}> SignIn Google </button>
    </div>
  );
};

export default Register;
