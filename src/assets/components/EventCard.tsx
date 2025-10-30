import React from "react";

type EventCardProps = {
  name: string;
  frequency: string; // "Weekly" | "Bi-Weekly" | "Monthly" | "Regional"
  image: string;
  location: string;
  tagline: string;
  href: string; // now required
  upcoming: boolean; // true => upcoming, false => past
  dayOfWeek: number; // 0=Sun ... 6=Sat (used for weekly/bi-weekly)
  time: string; // "HH:mm"
  initialDateISO: string; // fixed/anchor date (used for bi-weekly/monthly/regional)
};

/* ---------------- Helpers ---------------- */
const TZ = "America/Edmonton";

const parseTime = (t: string) => {
  const [hRaw, mRaw] = t.split(":");
  const h = parseInt(hRaw, 10);
  const m = parseInt(mRaw, 10);
  return { h: isNaN(h) ? 0 : h, m: isNaN(m) ? 0 : m };
};

const formatPretty = (d: Date | undefined) =>
  d
    ? new Intl.DateTimeFormat("en-CA", {
        timeZone: TZ,
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      }).format(d)
    : undefined;

function nextWeekly(now: Date, dow: number, time: string) {
  const { h, m } = parseTime(time);
  const next = new Date(now);
  next.setSeconds(0, 0);
  const delta = (dow - next.getDay() + 7) % 7;
  next.setDate(next.getDate() + delta);
  next.setHours(h, m, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 7);
  return next;
}

function nextBiWeekly(now: Date, dow: number, time: string, anchorISO: string) {
  const candidate = nextWeekly(now, dow, time);
  const { h, m } = parseTime(time);

  const anchor = new Date(anchorISO);
  const aligned = new Date(anchor);
  const shift = (dow - anchor.getDay() + 7) % 7;
  aligned.setDate(aligned.getDate() + shift);
  aligned.setHours(h, m, 0, 0);

  const diffDays = Math.floor(
    (candidate.getTime() - aligned.getTime()) / 86400000
  );
  const weeks = Math.floor(diffDays / 7);
  const isCorrectWeek = weeks % 2 === 0;

  if (!isCorrectWeek) candidate.setDate(candidate.getDate() + 7);
  return candidate;
}

function computeNextDatePretty(props: EventCardProps): string | undefined {
  if (!props.upcoming) return undefined;

  const now = new Date();
  const freq = props.frequency.toLowerCase();
  const anchor = props.initialDateISO
    ? new Date(props.initialDateISO)
    : undefined;
  const anchorIsFuture = !!anchor && anchor.getTime() > now.getTime();

  if (freq === "weekly") {
    return formatPretty(nextWeekly(now, props.dayOfWeek, props.time));
  }

  if (freq === "bi-weekly") {
    // If you want to strictly require anchor for bi-weekly cadence, keep as-is:
    return formatPretty(
      nextBiWeekly(now, props.dayOfWeek, props.time, props.initialDateISO)
    );
  }

  if (freq === "monthly" || freq === "regional") {
    // Show a future fixed date if provided, otherwise TBA
    return anchorIsFuture ? formatPretty(anchor) : "TBA";
  }

  return undefined;
}

/* ---------------- Component ---------------- */
export const EventCard: React.FC<EventCardProps> = ({
  name,
  image,
  frequency,
  location,
  tagline,
  href,
  upcoming,
  dayOfWeek,
  time,
  initialDateISO,
}) => {
  const nextText = computeNextDatePretty({
    name,
    image,
    frequency,
    location,
    tagline,
    href,
    upcoming,
    dayOfWeek,
    time,
    initialDateISO,
  });

  return (
    <a
      href={href}
      target="_blank"
      className="group h-full block rounded-2xl overflow-hidden shadow-lg bg-black/90 border border-slate-800
             transition-transform duration-300 ease-out hover:scale-[1.01] md:hover:scale-[1.015]"
    >
      {/* Reduced height ratio */}
      <div className="relative p-1.5 sm:p-2">
        <div className="relative h-full w-full rounded-xl overflow-hidden">
          <img
            alt={name}
            src={image}
            className="h-full w-full object-cover opacity-80 transition-opacity duration-300 ease-out group-hover:opacity-60"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="absolute inset-x-2 bottom-2 sm:inset-x-3 sm:bottom-3 lg:inset-x-5 lg:bottom-5 transition-[inset] duration-300 ease-out">
          <span
            className="inline-block rounded-full bg-yellow-400/50 px-3 py-1
                       text-[clamp(0.6rem,1vw,0.7rem)] font-semibold tracking-widest text-yellow-200 uppercase backdrop-blur-sm"
          >
            {frequency}
            {!upcoming ? " • Past" : ""}
          </span>

          <p className="mt-1.5 text-white font-bold drop-shadow-md text-[clamp(1rem,2vw,1.25rem)] leading-tight">
            {name}
          </p>

          <div
            className="mt-2 transition-all duration-300 ease-out
             sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          >
            <p className="text-white/90 text-[clamp(0.8rem,1.5vw,0.9rem)] leading-relaxed">
              <span className="font-semibold">Location:</span> {location}
              {upcoming && nextText && (
                <>
                  <br />
                  <span className="font-semibold">Next:</span> {nextText}
                </>
              )}
              <br />
              <span className="italic">{tagline}</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
