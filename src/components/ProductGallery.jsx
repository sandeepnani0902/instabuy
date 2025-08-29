import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function ProductGallery({user}) {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchproducts = async()=>{
      try{
              const response = await axios.get("https://api.escuelajs.co/api/v1/products")
      setProducts(response.data)
      console.log(response)
      }
    catch (err){
          console.log("error:", err)
    }

    }
    fetchproducts();
  },[])

  return (
    <>
      <div className='d-flex flex-wrap justify-content-center  gap-3 pt-5'>
        {products.map( (product) =>{
          return(
            <Card key={product.id} style={{width:"18rem", border:"none"}}>
              <Card.Img src={product.images[0]}  />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{color:"black"}}> ₹{product.price * 10}</Card.Text>
              </Card.Body>
              <Button onClick={() =>
            {if(user){
                  navigate(`/product/${product.id}`,{state:product})

            }
            else{
              navigate("/login")
            }}
              } variant='primary'
                 style={{margin:"0 20px 20px 20px"}}>view</Button>
            </Card>
          )
        })}
      </div>
      </>
  )
}

export default ProductGallery