import React from "react";
import EventItem from "./event-item";
import classes from "./event-item.module.css";
const EventList = (props: any) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event: any) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
