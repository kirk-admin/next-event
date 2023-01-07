import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../data/event-data";

const FilteredEvenPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <>
        <Head>
          <title>Event Filtered</title>
          <meta name="description" content="list of available events" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="title">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <Head>
          <title>Event Filtered</title>
          <meta name="description" content="list of available events" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="title">
          <p>Invalid filtered please adjust your values</p>
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <Head>
          <title>Event Filtered</title>
          <meta name="description" content="list of available events" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="title">
          <p>No events found.</p>
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  //-1 to start numMonth to 0
  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <Head>
        <title>Event Filtered</title>
        <meta name="description" content="list of available events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEvenPage;
