import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getonereceiep } from "../js/receipActions";

const ReceipDetails = () => {
  const { idreceip } = useParams();
const dispatch=useDispatch()
  useEffect(() => {
 dispatch(getonereceiep(idreceip))
  }, [idreceip]);
const {loading,rDetails}=useSelector(state=>state)
  return <div>
    {loading ?  <Spinner animation="border" variant="primary" />:
   <Card style={{ width: '18rem',marginTop:"10px" }}>
   <Card.Img variant="top" src={rDetails.image} />
   <Card.Body>
     <Card.Title> {rDetails.label}</Card.Title>
     <Card.Text>
       {rDetails.source}
     </Card.Text>
     <Link to={`/`}>
     <Button variant="primary">Go Home</Button>
     </Link>
   </Card.Body>
 </Card>

    }
  </div>;
};

export default ReceipDetails;
