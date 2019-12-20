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
      <Card>
        <CardImg
          top
          width="100%"
          src=""
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardSubtitle>Status: {props.status}</CardSubtitle>
          <CardText>
            <p>Gender:{props.gender}</p>
            <p>Species:{props.species}</p>
          </CardText>
        </CardBody>
      </Card>
    </span>
  );
};
