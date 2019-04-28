import React, { Component } from "react";
import { Router } from "@reach/router";
import * as api from "./api/api";

import Header from "./components/Header";
import Scroll from "./components/Scroll";
import EventList from "./components/EventList";
import EventListSearch from "./components/EventListSearch";
import Event from "./components/Event";
import Artist from "./components/Artist";
import Loading from "./components/Loading";

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
    const { isLoading, isError, events } = this.state;

    if (isError) return <p>this is an error</p>;

    if (isLoading) return <Loading />;

    return (
      <div>
        {events.length !== 0 && (
          <div className="App">
            <Header fetchEventsByKeyword={this.fetchEventsByKeyword} />
            <Scroll>
              <Router>
                <EventList path="/" events={events} />
                <EventListSearch path="/events/:search" />
                <Event path="/event/:event_id" />
                <Artist path="/artist/:artist_id" />
              </Router>
            </Scroll>
          </div>
        )}
      </div>
    );
  }

  fetchEventsByKeyword = keyword => {
    api
      .getEventsByKeyword(keyword)
      .then(({ data }) => {
        this.setState({ events: data.results, isLoading: false });
      })
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default App;
