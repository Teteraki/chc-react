import type { EventItem } from "../data/events";

// Helpers shared with Upcoming sort (mirror EventCard logic)
const parseTime = (t?: string) => {
  if (!t) return { h: 0, m: 0 };
  const [h, m] = t.split(":").map((v) => parseInt(v, 10));
  return { h: isNaN(h) ? 0 : h, m: isNaN(m) ? 0 : m };
};

function nextWeekly(now: Date, dow: number, time?: string) {
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

/**
 * Sort key for upcoming items:
 *  - { tba: true } -> shows "TBA" (these come FIRST among upcoming)
 *  - { tba: false, date } -> dated (ascending by date)
 */
export function getNextSortKey(e: EventItem): { tba: boolean; date?: Date } {
  const now = new Date();
  const freq = (e.frequency || "").toLowerCase();
  const anchor = e.initialDateISO ? new Date(e.initialDateISO) : undefined;
  const anchorIsFuture = !!anchor && anchor.getTime() > now.getTime();

  if (freq === "weekly" && e.dayOfWeek != null) {
    return { tba: false, date: nextWeekly(now, e.dayOfWeek, e.time) };
  }

  if (freq === "bi-weekly" && e.dayOfWeek != null) {
    if (e.initialDateISO) {
      return {
        tba: false,
        date: nextBiWeekly(
          now,
          e.dayOfWeek,
          e.time || "00:00",
          e.initialDateISO
        ),
      };
    }
    return { tba: false, date: nextWeekly(now, e.dayOfWeek, e.time) };
  }

  if (freq === "monthly") {
    if (anchorIsFuture) return { tba: false, date: anchor };
    return { tba: true };
  }

  if (freq === "regional") {
    if (anchorIsFuture) return { tba: false, date: anchor };
    return { tba: true };
  }

  // Unknown/insufficient -> TBA
  return { tba: true };
}
