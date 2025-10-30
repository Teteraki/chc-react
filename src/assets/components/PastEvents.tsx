import { EventCard } from "./EventCard";
import { events } from "../../data/events";

export const PastEvents: React.FC = () => {
  const past = events.filter((e) => !e.upcoming);
  if (!past.length) return null;

  return (
    <div className="shadow-lg py-6">
      <div className="mx-auto max-w-prose pb-6 text-center text-white ">
        <h2 className="text-3xl font-bold">Past Events</h2>
        <p className="text-gray-400">
          Checkout our past tournaments and events below!
        </p>
      </div>

      {/* Flexbox: smooth shrink, 3 → 2 → 1, with mobile gutters (IDENTICAL to Upcoming) */}
      <div className="mx-auto max-w-7xl flex flex-wrap items-stretch justify-center gap-6 px-4 sm:px-0">
        {past.map((e, i) => (
          <div
            key={`past-${i}`}
            className="
              flex
              basis-full sm:basis-[48%] lg:basis-[30%]
              min-w-[260px]
            "
          >
            <div className="flex w-full">
              <EventCard
                name={e.name}
                frequency={e.frequency}
                image={e.image}
                location={e.location}
                tagline={e.tagline}
                href={e.href || "#"}
                upcoming={false}
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
