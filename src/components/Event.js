import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api/api";
import "../style/Event.css";

import pin from "../assets/pin.png";
import calendar from "../assets/calendar.png";
import wallclock from "../assets/wall-clock.png";
import user from "../assets/user.png";

class Event extends Component {
  state = {
    isLoading: true,
    isError: "",
    event: {}
  };

  render() {
    const { isLoading, isError, event } = this.state;

    if (isError) return <p>this is an error</p>;

    if (isLoading) return <p>this is a loading</p>;

    return (
      <div>
        {Object.keys(event).length !== 0 && (
          <div className="Event">
            <img
              src={event.largeimageurl}
              alt="event"
              className="eventpage-profile-image"
            />
            <div className="eventpage-event-name">{event.eventname}</div>

            <div className="eventpage-grid">
              <img
                src={pin}
                alt="location"
                className="eventpage-icon eventpage-location-icon"
              />
              <div className="eventpage-details eventpage-event-location">
                {`${event.venue.name} in ${event.venue.town}`}
              </div>
              <img
                src={calendar}
                alt="date"
                className="eventpage-icon eventpage-date-icon"
              />
              <div className="eventpage-details eventpage-event-date">
                {new Date(event.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </div>
              <img
                src={wallclock}
                alt="time"
                className="eventpage-icon eventpage-time-icon"
              />
              <div className="eventpage-details eventpage-event-time">
                {`${event.openingtimes.doorsopen} til ${
                  event.openingtimes.doorsclose
                }`}
              </div>
              <img
                src={user}
                alt="minimum age"
                className="eventpage-icon eventpage-minage-icon"
              />
              <div className="eventpage-details eventpage-event-minage">
                {`Minimum Age: ${event.MinAge}`}
              </div>
            </div>
            <div className="eventpage-event-description">
              {event.description}
            </div>
            <div className="eventpage-event-artists">
              {event.artists.map((artist, index) => (
                <Link to={`/artist/${artist.artistid}`} key={index}>
                  <div className="eventpage-artist-name">{artist.name}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchEvent();
    this.setState({ isLoading: false });
  };

  fetchEvent = () => {
    const { event_id } = this.props;
    api
      .getEventById(event_id)
      .then(({ data }) => this.setState({ event: data.results }))
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default Event;
