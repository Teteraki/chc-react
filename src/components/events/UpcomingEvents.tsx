/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { EventCard } from "./EventCard";
import { fetchEvents } from "../../services/eventsService";

import { getNextSortKey } from "../../utils/event-utils";
import type { EventItem } from "../../types/EventItem";

export const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<EventItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const all = await fetchEvents(); // returns ALL rows
        setEvents(all);
      } catch (e: any) {
        setError(e?.message ?? "Failed to load events");
      }
    })();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!events) return <div>Loading events…</div>;

  const upcoming = events.filter((e) => e.upcoming);

  // TBA first, then earliest date (keeps your existing logic)
  const sorted = [...upcoming].sort((a, b) => {
    const A = getNextSortKey(a);
    const B = getNextSortKey(b);

    if (A.tba && B.tba) return 0;
    if (A.tba && !B.tba) return -1;
    if (!A.tba && B.tba) return 1;

    if (A.date && B.date) return A.date.getTime() - B.date.getTime();
    if (A.date && !B.date) return 1;
    if (!A.date && B.date) return -1;
    return 0;
  });

  return (
    <div className="py-6">
      <div className="mx-auto max-w-prose pb-6 text-center text-white ">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <p className="text-gray-400">
          Catch our latest tournaments and meetups below!
        </p>
      </div>

      {/* Flexbox: smooth shrink, 3 → 2 → 1, with mobile gutters */}
      <div className="mx-auto max-w-7xl flex flex-wrap items-stretch justify-center gap-6 px-4 ">
        {sorted.map((e, i) => (
          <div
            key={`up-${e.name}-${e.initialDateISO ?? i}`}
            className="flex basis-full sm:basis-[48%] lg:basis-[30%] min-w-[260px]"
          >
            {/* Make the card fill the flex item height for equal-looking rows */}
            <div className="flex w-full">
              <EventCard
                name={e.name}
                frequency={e.frequency}
                image={e.image}
                location={e.location}
                tagline={e.tagline}
                href={e.href || "#"}
                upcoming={true}
                dayOfWeek={typeof e.dayOfWeek === "number" ? e.dayOfWeek : 0}
                time={e.time || "00:00"}
                initialDateISO={e.initialDateISO || new Date(0).toISOString()}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
