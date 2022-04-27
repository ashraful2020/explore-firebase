import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceContent = (props) => {
  const {id,name, price, img, seller, stock } = props.product;
  return (
    <div className="col-md-4 g-5">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>{name}</Card.Text>
          <Card.Title>Price : ${price}</Card.Title>
          <Card.Title>{seller}</Card.Title>
          <Card.Title>Or {stock} product in stock </Card.Title>
          <Link className="btn btn-primary" to={`details/${id}`}>Details ...</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceContent;
