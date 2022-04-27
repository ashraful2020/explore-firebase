import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [specificData, setSpecificData] = useState({});

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details.find((detail) => detail.id == id);
      setSpecificData(matchedData);
    }
  }, [id, details]);
  return (
    <div>
      <p> This is details page : {id}</p>

      <Card
        style={{
          width: "80%",
          margin: "0 auto",
          marginTop: "20",
          marginBottom: "50",
        }}
      >
        <Card.Img
          variant="top"
          style={{ width: "50%", margin: "0 auto" }}
          src={specificData?.img}
        />
        <Card.Body>
          <Card.Title>{specificData?.name}</Card.Title>
          <Card.Title> price :${specificData?.price}</Card.Title>
          <Card.Text>Seller : {specificData?.seller}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
