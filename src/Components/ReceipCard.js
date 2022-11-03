import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ReceipCard = ({receip}) => {
  return (
    <Card style={{ width: '18rem',marginTop:"10px" }}>
      <Card.Img variant="top" src={receip.image} />
      <Card.Body>
        <Card.Title> {receip.label}</Card.Title>
        <Card.Text>
          {receip.source}
        </Card.Text>
        <Link to={`/${receip.uri.slice(51)}`}>
        <Button variant="primary">See Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ReceipCard