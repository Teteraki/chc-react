// Keep this in sync with EventCard props
export type EventItem = {
  name: string;
  frequency: string; // "Weekly" | "Bi-Weekly" | "Monthly" | "Regional"
  image: string;
  location: string;
  tagline: string;
  href?: string;
  upcoming: boolean; // true => upcoming, false => past
  dayOfWeek?: number; // 0=Sun ... 6=Sat (for weekly/bi-weekly)
  time?: string; // "HH:mm"
  initialDateISO?: string; // optional anchor / fixed date
};

export const events: EventItem[] = [
  {
    name: "The Arena Arc",
    image:
      "https://images.start.gg/images/tournament/839773/image-a396f61bfe6251bb3ef418ada8a8fad1.jpg",
    frequency: "Bi-Weekly",
    location: "345 6th Ave SE, Calgary, AB T2G 4V1",
    tagline:
      "The arena arc begins for Cold Hands at the Bow Valley Esports Arena!",
    href: "https://start.gg/taa",
    dayOfWeek: 5, // Tuesday
    time: "17:30",
    initialDateISO: "2025-10-24T17:30:00",
    upcoming: true,
  },
  {
    name: "MRU Smash Club Weekly",
    image:
      "https://images.start.gg/images/tournament/845346/image-166f3c48c7710c413493e119fd4fd330.png",
    frequency: "Weekly",
    location: "4825 Mount Royal Gate S.W. Calgary, AB",
    tagline: "Every second Tuesday on the 2nd Floor of Wyckham House!",
    href: "https://start.gg/mrusmash",
    dayOfWeek: 2, // Thursday
    time: "17:30",
    initialDateISO: "2025-10-28T17:30:00",
    upcoming: true,
  },

  {
    name: "Heat Check",
    image:
      "https://images.start.gg/images/tournament/806116/image-02db646c024bf5f3818c39180a23c1ce.png",
    frequency: "Regional",
    location: "Bow Valley College Esports Arena",
    tagline:
      "A summer wrap-up spectacle! Who will go on a fire run and claim the crown?",
    href: "https://start.gg/heatcheck",
    initialDateISO: "2025-02-10T10:00:00",
    upcoming: false,
  },
  {
    name: "Black Tie Basement",
    image:
      "https://images.start.gg/images/tournament/834173/image-45074a8f1d9d7d1724e9975206672a94.png",
    frequency: "Bi-Weekly",
    location: "Tuxedo Park Community Association and Hall",
    tagline: "The classic Tuxedo Park Smash tournament!",
    href: "start.gg/btb",
    initialDateISO: "2025-02-10T10:00:00",
    upcoming: false,
  },
];
