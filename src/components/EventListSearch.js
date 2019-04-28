import React, { Component } from "react";
import * as api from "../api/api";
import "../style/EventList.css";

import EventCard from "./EventCard";

class EventListSearch extends Component {
  state = {
    isLoading: true,
    isError: "",
    events: []
  };

  render() {
    const { isLoading, isError, events } = this.state;

    if (isError) return <p>this is an error</p>;

    if (isLoading) return <p>this is a loading</p>;

    return (
      <div>
        {events.length !== 0 && (
          <div className="EventList">
            {events.map((event, index) => (
              <EventCard
                key={index}
                eventImage={events[index].largeimageurl}
                eventId={events[index].id}
                eventName={events[index].eventname}
                description={events[index].description}
                location={events[index].venue.town}
                date={events[index].date}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    const { search } = this.props;
    this.fetchEventsByKeyword(search);
  };

  fetchEventsByKeyword = keyword => {
    api
      .getEventsByKeyword(keyword)
      .then(({ data }) => {
        this.setState({ events: data.results, isLoading: false });
      })
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default EventListSearch;
