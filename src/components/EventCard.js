import React from "react";
import { Link } from "@reach/router";
import "../style/EventCard.css";

import calendar from "../assets/calendar.png";
import pin from "../assets/pin.png";

const EventCard = ({
  eventImage,
  eventId,
  eventName,
  description,
  location,
  date
}) => {
  return (
    <div className="EventCard">
      <Link to={`/event/${eventId}`}>
        <div className="event-grid">
          <img src={eventImage} alt="" className="event-image" />
          <div className="event-name">
            {eventName.slice(0, 30).trimEnd() + "..."}
          </div>
          <div className="event-description">
            {description.slice(0, 90).trimEnd() + "..."}
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
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </div>
          <div className="view-details">
            <div>view details</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
