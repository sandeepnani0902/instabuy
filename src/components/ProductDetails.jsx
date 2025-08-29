import React, { useEffect, useState } from 'react'
import { Button,Row, Col, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
function ProductDetails({handlecart, cartItems}) {
    
    const navigate = useNavigate();
    const location = useLocation() 

    const {title, images, price, description, category, id} =location.state
    // console.log(images)

    const [itemcategory , setCategory] = useState([]);

    useEffect(()=>{
        const fetchcategory = async()=>{
            try{
                const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=20&offset=0`)
                setCategory(response.data)
            
            }
            catch  (err){
                console.log("error:", err)
            }
        }
        fetchcategory();
    },[])

  return (
   <>

       <div>
        <Row >
            <Col lg={2}>
                <div>
                    {
                        images.map( (image,index) =>{
                            return(
                            <img  key={index} src={image} width={100} height={100} style={{margin:"20px", objectFit:"fill",borderRadius:"15px"}}/>
                            ) 
                        })
                    }
                </div>
            </Col>
            <Col lg={5}> 
                <div>
                    <img src={images} width={350} style={{marginTop:"20px",borderRadius:"15px"}} alt="" />
                    <h5 style={{marginTop:10}}>{title}</h5>
                    <h5 style={{fontWeight:"bold"}}>₹ {price *10}</h5>
                    <p style={{opacity:"0.8"}}>{description}</p>
                    <Button
                    variant="primary"
                    onClick={() => {
                        if( id in cartItems){
                            const currentItem = cartItems[id];
                            handlecart({[id]: { title, price, images, quantity:currentItem.quantity + 1 }})
                        }
                        else{
                            handlecart({[id]:{ title, price, images,  quantity:1  }})
                        }

                        navigate("/cart");
                    }}
                    >
                    Add to cart
                    </Button>

                </div>
             </Col>
             <Col>
             <h3 style={{textAlign:"center", marginTop:"15px", color:"#FFEB3B"}}>Other products in the same category</h3>
             <div className='d-flex flex-wrap  gap-2 pt-5'>
                
                {
                    itemcategory.map(product =>{
                        if( product.id !== id)
                        return(
                              <Card key={product.id} style={{width:"10rem", border:"none"}}>
                                <Card.Img src={product.images} style= {{objectFit:"fill", height:"100px"}}  />
                                <Card.Body style={{padding:"5px 5px 0 5px"}}>
                                <Card.Title style={{fontSize:"12px"}}>{product.title}</Card.Title>
                                <Card.Text style={{color:"black",fontWeight:"bold"}}> ₹{product.price}</Card.Text>
                                </Card.Body>
                                <Button onClick={() => navigate(`/product/${product.id}`,{state:product})} variant='primary'
                                    style={{margin:"0px 5px 5px 5px", padding:"0", fontWeight:"bold"}}>view</Button>
                              </Card>
                        )
                    })
                }
             </div>
            </Col>
        </Row>
      </div>
      
      </>
     
  )
}

export default ProductDetails