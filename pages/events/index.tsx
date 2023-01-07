import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../data/event-data";

const EventsMainPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="All available events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
};

export default EventsMainPage;
