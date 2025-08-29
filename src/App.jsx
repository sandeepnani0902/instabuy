import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Navbar, Container, Button } from 'react-bootstrap';
import Login from './components/Login';
import Signin from './components/Signin';
import Home from './components/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
function App() {

  
  const [ user, setUser]= useState();
  const [ cartItems, setCartItems] =useState({})
  const navigate = useNavigate()
useEffect(()=>{
    const storedUser = localStorage.getItem("loggedInUser");
    
    if( storedUser){
      setUser(JSON.parse(storedUser))
    }



},[])

 function handlecart(item){
  setCartItems({...cartItems, ...item})
  localStorage.setItem("cartitems", JSON.stringify(cartItems))
 }
  return (
    <>
      <Navbar className="bg-body-tertiary" sticky="top" style={{padding:"1rem"}}>
        {/* <Container> */}
          <Navbar.Brand href="#home">
            <h3><span style={{color:"red"}}>Insta</span>Buy@</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            { user ? <Button onClick={
              ()=>{
                if(user){
                  localStorage.removeItem("loggedInUser")
                  setUser(null)
                  navigate("/login")
                }
              }
            }>logout</Button> : <Button onClick={
              ()=>{
                  navigate("/login")
              }
            }>login</Button>}
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    <Routes>
      <Route path="/" element={<Home user={user}/>} />
      <Route path="/login" element={<Login  Getuser = {setUser}/>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/products" element={<ProductGallery user={user}/>}/>
      <Route path="/product/:id" element={<ProductDetails  handlecart={handlecart} cartItems={cartItems} />} />
      <Route path="/cart" element={<Cart  cartItems={cartItems}/>} />

    </Routes>

    
    </>
  )
}

export default App
