import React, { useState } from 'react';
import { Button, Form, Row, Col , Navbar, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import banner from "../assets/singinbanner.png";
import "../components/signin.css";

function Signin() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault(); // prevent page reload

    const newUser = {
      name: fullname,
      mail: email,
      password: password
    };

    // get existing users from localStorage         

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    // add new user
    
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    navigate('/login');
  };

  
  return (
    <>

      <div className='loginpage'>
        <Row>
          <Col>
            <div className='loginblock'>
              <h2>InstaBuy@</h2>
              <p>Here's the one place for all your needs</p>
              <Form onSubmit={handleSignin}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "60%" }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "60%" }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFullname">
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    style={{ width: "60%" }}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className='submitbutton'
                  variant="primary"
                  style={{ width: "60%" }}
                >
                  Signin
                </Button>

                <br />
                <a href="/">Back to Home</a>
              </Form>
            </div>
          </Col>

          <Col>
            <div className='loginbannerblock'>
              <img src={banner} alt="signin shopping banner" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Signin;
