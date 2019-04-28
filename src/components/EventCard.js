import React from "react";
import { Link } from "@reach/router";
import "../style/EventCard.css";

import calendar from "../assets/calendar.png";
import pin from "../assets/pin.png";

const EventCard = ({
  eventImage,
  eventId,
  eventName,
  location,
  date,
  eventType
}) => {
  return (
    <div className="EventCard">
      <Link to={`/event/${eventId}`}>
        <div className="event-grid">
          <img src={eventImage} alt="" className="event-image" />
          <div className="event-name">
            {eventName.length <= 30
              ? eventName
              : eventName.slice(0, 30).trimEnd() + "..."}
          </div>
          <img
            src={pin}
            alt="location"
            className="eventcard-icon location-icon"
          />
          <div className="eventcard-details event-location">{location}</div>
          <img src={calendar} alt="date" className="eventcard-icon date-icon" />
          <div className="eventcard-details event-date">
            {new Date(date).toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </div>
          <object className="more-button view-details">
            <Link to={`/event/${eventId}`}>
              <div className="button-text">view details</div>
            </Link>
          </object>
          <object className="more-button view-similar">
            <Link to={`/events/${eventType}%20${location}`}>
              <div className="button-text">more like this</div>
            </Link>
          </object>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
