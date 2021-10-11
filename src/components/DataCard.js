import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class DataCard extends Component {
  render() {
    return this.props.data.map((item) => {
      return (
        <Card style={{ width: "18rem" }} className = "card">
          <Card.Img variant="top" src= {item.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{item.strDrink}</Card.Title>
            <Card.Text>
            Price : {Math.floor(Math.random() * (3 - 1 + 1) + 1)  + [0,0.25,0.75,0.5][Math.floor(Math.random() * ( 3 - 0 + 1) + 0)]} JD
            </Card.Text>
            <Button variant="primary" onClick = {()=>this.props.addToFavs(item)}>Add to favourites</Button>
          </Card.Body>
        </Card>
      );
    });
  }
}

export default DataCard;
