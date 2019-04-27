import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
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

            <div className="eventpage-details-container">
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
                    weekday: "long",
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
                  {event.openingtimes.lastentry
                    ? `${event.openingtimes.doorsopen} til ${
                        event.openingtimes.doorsclose
                      } (last entry ${event.openingtimes.lastentry.slice(
                        0,
                        5
                      )})`
                    : `${event.openingtimes.doorsopen} til ${
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
            </div>
            <div className="eventpage-description-container">
              <div className="eventpage-event-description">
                {event.description}
              </div>
            </div>
            <div className="eventpage-buttons-container">
              <div className="eventpage-event-button">
                {event.artists.slice(0, 5).map((artist, index) => (
                  <Link to={`/artist/${artist.artistid}`} key={index}>
                    <div className="eventpage-button eventpage-artist-name">
                      {artist.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="eventpage-buttons-container">
              <div className="eventpage-event-button">
                {event.genres.slice(0, 5).map((genre, index) => (
                  <Link to={`/genre/${genre.name}`} key={index}>
                    <div className="eventpage-button eventpage-genre-name">
                      {genre.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="eventpage-buttons-container">
              <div className="eventpage-event-button">
                {event.going.slice(0, 5).map((going, index) => (
                  <div
                    key={index}
                    className="eventpage-button eventpage-going-name"
                  >
                    {going.name}
                  </div>
                ))}
              </div>
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
