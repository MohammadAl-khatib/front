import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class DataCard extends Component {
  render() {
    return this.props.data.map((item) => {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src= {item.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{item.strDrink}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick = {()=>this.props.addToFavs(item)}>Add to favourites</Button>
          </Card.Body>
        </Card>
      );
    });
  }
}

export default DataCard;
