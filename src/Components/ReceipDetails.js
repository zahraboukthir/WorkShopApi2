import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ReceipDetails = () => {
  const { idreceip } = useParams();
  const [oneR, setoneR] = useState({})
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const getoneR = async () => {
      try {
        const { data } = await axios.get(
          `https://api.edamam.com/api/recipes/v2/${idreceip}?type=public&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5
`
        );
       setoneR(data.recipe)
       setloading(false)
      } catch (error) {
        console.log(error)
      }
    };
    getoneR();
  }, [idreceip]);

  return <div>
    {loading ?  <Spinner animation="border" variant="primary" />:
   <Card style={{ width: '18rem',marginTop:"10px" }}>
   <Card.Img variant="top" src={oneR.image} />
   <Card.Body>
     <Card.Title> {oneR.label}</Card.Title>
     <Card.Text>
       {oneR.source}
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
