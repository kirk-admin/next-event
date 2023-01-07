import Head from "next/head";
import Image from "next/image";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/event-data";
import styles from "../styles/Home.module.css";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className={styles.container}>
      <Head>
        <title>Event App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Home Page</h1>
        <EventList items={featuredEvents} />
      </main>
    </div>
  );
}
