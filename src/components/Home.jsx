import React, { useEffect } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import { useNavigate } from 'react-router-dom';

import image from "../assets/image.png";
import image2 from "../assets/copleshopping.png";
import image3 from "../assets/girlwithhandbags.png";
import brand1 from "../assets/adidas.png";
import brand2 from "../assets/nike.png";
import brand3 from "../assets/cc.png";
import brand4 from "../assets/levis.png";
import brand5 from "../assets/lv.png";

import './Home.css';

function Home({user}) {
  const  navigate = useNavigate();
  function handleclick(){
    if(user){
      navigate("/products")
    }
    else{
      navigate("/login")
    }
  }

  return (
    <>


      <Carousel>
        <Carousel.Item>
          <Container>
            <Row>
              <Col style={{display:"flex",justifyContent:"center", alignItems:"center"}}>

                <div className='banner-title'>
                  <h3><em>SHOP WITH UTMOST <br /> STYLE</em></h3>
                  <p>Let's explore with our trending and latest product's</p>
                  <Button type='button' onClick={handleclick} style={{width:"50%"}}>Browse Products</Button>
                  <p>Products are available from:</p>
                  <div className='brands'>
                    <img src={brand1} alt="" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />
                    <img src={brand5} alt="" />
                  </div>
                </div>
              </Col>
               <Col style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                <div className='banner-img'>
                  <img className="d-block w-100" src={image} alt="First slide" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container>
            <Row>
               <Col style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                <div className='banner-title'>
                  <h3><em>SHOP WITH UTMOST <br /> STYLE</em></h3>
                  <p>Let's explore with our trending and latest product's</p>
                  <Button type='button' onClick={handleclick} style={{width:"50%"}}>Browse Products</Button>
                  <p>Products are available from:</p>
                  <div className='brands'>
                    <img src={brand1} alt="" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />
                    <img src={brand5} alt="" />
                  </div>
                </div>
              </Col>
              <Col>
                <div className='banner-img'>
                  <img className="d-block w-100" src={image2} alt="Second slide" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <div className='banner-title'>
                  <h3><em>SHOP WITH UTMOST <br /> STYLE</em></h3>
                  <p>Let's explore with our trending and latest product's</p>
                  <Button type='button' onClick={handleclick } style={{width:"50%"}}>Browse Products</Button>
                  <p>Products are available from:</p>
                  <div className='brands'>
                    <img src={brand1} alt="" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />
                    <img src={brand5} alt="" />
                  </div>
                </div>
              </Col>
              <Col>
                <div className='banner-img'>
                  <img className="d-block w-100" src={image3} alt="Third slide" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
