import React from 'react';
import {Link,useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {Row,Col,Image,Card,ListGroup} from 'react-bootstrap'
import Rating from './Rating'

function RestaurantDetails() {
    const [data,setData]=useState([])
    const params = useParams()
    const{id}=params
    useEffect(()=>{
        const fetchData = async ()=>{
            await fetch('/restaurants.json')
            .then((response)=>response.json())
            .then((data)=>setData(data.restaurants))
        }
        fetchData()
    },[])

    console.log("our data",id);
    const details = data.find((i) => i.id == id)
      console.log("details is",details);

  return <div>
<Link className="btn btn-outline-success my-2 rounded bt-sm" to="/">back</Link>

{details ?(
  <Row className="my-3">
    <Col md={3}>
      <Image className="img" src={details.photograph} alt={details.name} fluid/>
    </Col>
    <Col md={4}>
      <ListGroup.Item>
        <h2>{details.name}</h2>
        <p>{details.neighborhood}</p>
      </ListGroup.Item>

      <ListGroup.Item>
        <p>Cuisine:{details.cuisine_type}</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Address:{details.address}</p>
      </ListGroup.Item>
    </Col>
     <Col md={4}>
     <ListGroup.Item>
     <h4>Operating hours:</h4>
        <p>Monday:{details.operating_hours.Monday}</p>
        <p>Tuesday:{details.operating_hours.Tuesday}</p>
        <p>Wednesday:{details.operating_hours.Wednesday}</p>
         <p>Thursday:{details.operating_hours.Thursday}</p>
         <p>Friday:{details.operating_hours.Friday}</p>
        <p>Saturday:{details.operating_hours.Saturday}</p>
      </ListGroup.Item>
   </Col> 
    <Row>
      <Card className="my-3 p-3 rounded card">
        <Rating data={details.reviews}/>
      </Card>
    </Row>
  </Row>
):null}
  </div>;
}

export default RestaurantDetails;
