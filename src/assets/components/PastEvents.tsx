import React from "react";
import { EventCard } from "./EventCard";
import { events } from "../../data/events";

export const PastEvents: React.FC = () => {
  const past = events.filter((e) => !e.upcoming);
  if (!past.length) return null;

  return (
    <>
      <div className="mx-auto max-w-prose pb-4 pt-10 text-center text-white/80">
        <h3 className="text-xl font-semibold">Past Events</h3>
      </div>

      <div className="mx-auto flex flex-wrap justify-center gap-8 px-4 sm:px-0">
        {past.map((e, i) => (
          <div key={`past-${i}`} className="w-full sm:w-1/2 lg:w-1/3">
            {/* EventCard ignores date math when upcoming=false, so safe defaults are fine */}
            <EventCard
              name={e.name}
              frequency={e.frequency}
              image={e.image}
              location={e.location}
              tagline={e.tagline}
              href={e.href ?? "#"}
              upcoming={false}
              dayOfWeek={e.dayOfWeek ?? 0}
              time={e.time ?? "00:00"}
              initialDateISO={e.initialDateISO ?? new Date(0).toISOString()}
            />
          </div>
        ))}
      </div>
    </>
  );
};
