import Head from "next/head";
import { useRouter } from "next/router";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById } from "../../data/event-data";

const EventSinglePage = () => {
  const router = useRouter();
  const eventId: string = router.query.eventId as string;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventSinglePage;
