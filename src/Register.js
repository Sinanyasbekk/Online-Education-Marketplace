//import React, { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Register.css";

const Register = ({ setShowProfile }) => {
  /*
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7280/swagger/index.html"
        );
        setApiData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []);*/
  const handleSignUp = () => {
    setShowProfile(true);
  };

  return (
    <div className="register">
      <div className="register1" />
      <div className="button">
        <div className="button-child" />
        <Button className="sign-up" variant="primary" onClick={handleSignUp}>
          Sign up
        </Button>
      </div>
      <div className="privacy">
        <Form.Check className="checkbox-formcheck" />
        <div className="agree-the-terms">
          Agree the terms of use and privacy policy
        </div>
      </div>
      <div className="infos">
        <div className="phone">
          <div className="phone1">Phone</div>
          <Form className="name">
            <Form.Control type="text" />
          </Form>
        </div>
        <div className="name1">
          <div className="phone1">Name</div>
          <Form className="name">
            <Form.Control type="text" />
          </Form>
        </div>
        <div className="mail">
          <div className="phone1">Mail</div>
          <Form className="name">
            <Form.Control type="text" />
          </Form>
        </div>
        <div className="surname">
          <div className="surname1">Surname</div>
          <Form className="name">
            <Form.Control type="text" />
          </Form>
        </div>
        <div className="password">
          <div className="surname1">Password</div>
          <Form className="name">
            <Form.Control type="text" />
          </Form>
        </div>
      </div>
      <div className="please-create-a">Please create a new account</div>
      <b className="sign-up1">
        <p className="sign-up2">Sign up</p>
      </b>
      <div className="header">
        <div className="emapp">EMAPP</div>
        <div className="header-child" />
        <img className="icon" alt="" src="../public/images/1631349418659.png" />
        <img className="search-1-icon" alt="" src="/search-1@2x.png" />
        <div className="header-item" />
        <Button className="basket-3" variant="primary">
          Basket (3)
        </Button>
        <div className="search">search</div>
        <div className="header-inner" />
        <div className="line-div" />
        <div className="header-child1" />
        <div className="header-child2" />
        <Button className="courses" variant="outline-primary">
          Courses
        </Button>
        <Button className="login" variant="outline-primary">
          Login
        </Button>
        <Button className="register2" variant="outline-primary">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;

/*{apiData && (
  <div className="api-data">
    <h2>Fetched Data</h2>
    {/* Display the fetched data here }
    <pre>{JSON.stringify(apiData, null, 2)}</pre>
  </div>
)}*/
