import React, { Component } from "react";
import { Router } from "@reach/router";
import * as api from "./api/api";
import "./style/App.css";

import Header from "./components/Header";
import Scroll from "./components/Scroll";
import EventList from "./components/EventList";
import Event from "./components/Event";
import Artist from "./components/Artist";

class App extends Component {
  state = {
    isLoading: true,
    isError: "",
    events: []
  };

  componentDidMount = () => {
    this.fetchEventsByKeyword("");
  };

  render() {
    const { events } = this.state;
    return (
      <div className="App">
        <Header fetchEventsByKeyword={this.fetchEventsByKeyword} />
        <Scroll>
          <Router>
            <EventList path="/" events={events} />
            <Event path="/event/:event_id" />
            <Artist path="/artist/:artist_id" />
          </Router>
        </Scroll>
      </div>
    );
  }

  fetchEventsByKeyword = keyword => {
    api
      .getEventsByKeyword(keyword)
      .then(({ data }) => {
        this.setState({ events: data.results });
      })
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default App;
