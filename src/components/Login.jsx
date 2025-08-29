import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container,Row, Col, Button, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import banner from "../assets/loginbanner.png";
import "../components/login.css";

function Login({Getuser}) {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = existingUsers.find(
      (user) => user.mail === email && user.password === password
    );
   
  if (matchedUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    Getuser(matchedUser); // ✅ this is fine now
    navigate('/');
  }
  else {
        alert("Invalid email or password. Please try again.");
      }
    };

  return (
    <>

      <div className='loginpage'>
        <Row>
          <Col>
            <div className='loginblock'>
              <h2>InstaBuy@</h2>
              <p>One place to find all your products</p>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    style={{ width: "60%" }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "60%" }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                  <a href="/signin">signin</a>
                </Form.Group>
                
                <Button
                  type="submit"
                  className='submitbutton'
                  variant="primary"
                  style={{ width: "60%" }}
                  // onClick={handleuser}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>

          <Col>
            <div className='loginbannerblock'>
              <img src={banner} alt="login shopping" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;
