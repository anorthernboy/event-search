import React from "react";
import "../style/EventList.css";

import EventCard from "../components/EventCard";

const EventList = ({ events }) => {
  return (
    <div className="EventList">
      {events.map((event, index) => (
        <EventCard
          key={index}
          eventImage={events[index].largeimageurl}
          eventId={events[index].id}
          eventName={events[index].eventname}
          location={events[index].venue.town}
          date={events[index].date}
          eventType={events[index].EventCode}
        />
      ))}
    </div>
  );
};

export default EventList;
