import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventItem = (props: any) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <Image src={`/${image}`} width={100} height={100} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
      <Link href={exploreLink}>Explore Event</Link>
    </li>
  );
};

export default EventItem;
