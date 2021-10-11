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
              Enjoy the best drinks ever
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => this.props.handleModalOpen(item)}
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
      );
    });
  }
}

export default FavCard;
