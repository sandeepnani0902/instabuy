import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import banner from "../assets/cartbanner.png"
import { useNavigate } from 'react-router-dom';
function Cart({ cartItems }) {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [totalQuantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(cartItems)
  useEffect(() => {
    const fetchingUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(fetchingUser);

    let tempPrice = 0;
    let tempQuantity = 0;
  
    Object.keys(cartItems).forEach((cartItemId) => {
      const cartItem = cartItems[cartItemId];
      tempQuantity += cartItem.quantity;
      tempPrice += cartItem.quantity * cartItem.price *10;
    });

    setQuantity(tempQuantity);
    setTotalPrice(tempPrice);
  }, [cartItems]);

  return (
    <div style={{margin:"2rem"}}>
      <h2 style={{marginBottom:"4rem"}}>Hey {user?.name}, your cart:</h2>
    {/* <Container> */}
            <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(cartItems).map((cartItemId) => {
                  const cartItem = cartItems[cartItemId];
                  return (
                    <tr key={cartItemId}>
                      <td><img src={cartItem.images[0]} width={100} alt="" /> | {cartItem.title}</td>
                      <td>{cartItem.quantity}</td>
                      <td>{cartItem.price * 10 }</td>
                    </tr>
                  );
                })
              }
              <tr>
                <td>total</td>
                <td>{totalQuantity}</td>
                <td>₹ {totalPrice}</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={()=>navigate("/products")}>Back to shopping</Button>
        </Col>
        <Col>
         <h4 style={{textAlign:"center"}}> <span style={{color:'red'}}>Shop</span> Again</h4>
         <div style={{textAlign:"center"}}>
           <img  src={banner}  alt="" />
         </div>
        </Col>   
      </Row>
    {/* </Container> */}

    </div>
  );
}

export default Cart;
