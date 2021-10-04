import axios from "axios";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DataCard from "./components/DataCard";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LOgoutButton";
import FavCard from "./components/FavCard";
import FavModal from "./FavModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      item: {},
      favs: [],
      showModal: false,
      strDrink: "",
      idDrink: "",
      strDrinkThumb: "",
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_PORT}/data`).then((res) => {
      this.setState({
        data: res.data.drinks,
      });
    });
    axios.get(`${process.env.REACT_APP_BACKEND_PORT}/favs`).then((res) => {
      this.setState({
        favs: res.data,
      });
    });
  };

  addToFavs = (item) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_PORT}/create-fav?email=${this.props.auth0.user.email}`,
        item
      )
      .then((res) => {
        this.setState({
          favs: res.data,
        });
      });
  };

  handleModalOpen = (item) => {
    console.log(item);
    this.setState({
      showModal: true,
      item: item,
      strDrink: item.favs.strDrink,
      idDrink: item.favs.idDrink,
      strDrinkThumb: item.favs.strDrinkThumb,
    });
  };

  handleModalClose = () => {
    this.setState({
      showModal: false,
    });
  };

  handleStrDrink = (e) => {
    this.setState({
      strDrink: e.target.value,
    });
  };

  updateFav = ()=> {
    let updatedFav = {
      strDrink: this.state.strDrink,
      idDrink: this.state.idDrink,
      strDrinkThumb: this.state.strDrinkThumb,
    }
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_PORT}/update-fav/${this.state.item._id}`,
        updatedFav
      )
      .then((res) => {
        this.setState({
          favs: res.data,
        });
      });
  }

deleteFav = () => {
  axios
  .delete(
    `${process.env.REACT_APP_BACKEND_PORT}/delete-fav/${this.state.item._id}`,
  )
  .then((res) => {
    this.setState({
      favs: res.data,
    });
  });
}

  render() {
    return (
      <div>
        <Router>
          <Nav />
          {!this.props.auth0.isAuthenticated && <LoginButton />}
          {this.props.auth0.isAuthenticated && <LogoutButton />}
          <Switch>
            <Route exact path="/">
              <div id="datacard">
                <DataCard data={this.state.data} addToFavs={this.addToFavs} />
              </div>
            </Route>
            <Route exact path="/favs">
              <FavCard
                favs={this.state.favs}
                handleModalOpen={this.handleModalOpen}
              />
              <FavModal
                showModal={this.state.showModal}
                handleModalClose={this.handleModalClose}
                strDrink={this.state.strDrink}
                handleStrDrink = {this.handleStrDrink}
                updateFav = {this.updateFav}
                deleteFav = {this.deleteFav}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
