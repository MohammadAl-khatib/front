import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class FavModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Favourit Drink</Modal.Title>
        </Modal.Header>
        <Modal.Body><form>
          <label>Drink Name:&nbsp;</label>
          <input defaultValue ={this.props.strDrink} onChange = {this.props.handleStrDrink} /> <br/>
          </form></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick = {()=>{this.props.updateFav();this.props.handleModalClose()}} >update</Button>
          <Button variant="primary" onClick = {()=>{this.props.deleteFav();this.props.handleModalClose()}} >delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FavModal;
