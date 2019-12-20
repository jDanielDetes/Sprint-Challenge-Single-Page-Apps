import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CharacterCard = props => {
  // name , status, species
  return (
    <span>
      
      <Card  body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
        body
        outline
        color="danger">
        <CardImg
          top
          width="100%"
          src={props.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardSubtitle>Status: {props.status}</CardSubtitle>
          <CardText>
            Gender:{props.gender}
          </CardText>
          <CardText>
            Species:{props.species}
          </CardText>
        </CardBody>
      </Card>
    </span>
  );
};
export default CharacterCard