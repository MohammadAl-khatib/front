import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class FavCard extends Component {
  render() {
    return this.props.favs.map((item) => {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.favs.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{item.favs.strDrink}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => this.props.handleModalOpen(item)}
            >
              Add to favourites
            </Button>
          </Card.Body>
        </Card>
      );
    });
  }
}

export default FavCard;
