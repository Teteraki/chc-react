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
      className="group relative block bg-black rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        alt={name}
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        {/* Yellow, rounded, semi-transparent frequency pill */}
        <span className="inline-block rounded-full bg-yellow-400/50 px-3 py-1 text-[11px] font-semibold tracking-widest text-yellow-200 uppercase">
          {frequency}
          {!upcoming ? " • Past" : ""}
        </span>

        <p className="mt-2 text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
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
