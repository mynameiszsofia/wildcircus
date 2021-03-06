import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Arts from "./pages/circusArts/circusArts.jsx";
import Main from "./pages/main/main.jsx";
import Tickets from "./pages/ticket/ticket.jsx";
import Gallery from "./pages/gallery/gallery.jsx";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/home" exact component={Main} />
          <Route path="/talents" exact component={Arts} />
          <Route path="/booking" exact component={Tickets} />
          <Route path="/team" exact component={Gallery} />
        </Switch>
      </Router>
    );
  }
}
