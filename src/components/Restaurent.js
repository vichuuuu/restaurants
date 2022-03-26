import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Restaurent({ item }) {

  return (

    <>
      <Link to={`restaurants/${item.id}`}>
        <Card className="my-3 p-3 rounded">
          <Card.Img variant='top' src={item.photograph}></Card.Img>
          <Card.Body>
            <Card.Title as='div'>
              {item.name}
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>

    </>
  )
}

export default Restaurent;
