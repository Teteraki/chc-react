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
    location: "Bow Valley College, Atrium",
    tagline: "The arena arc begins for Cold Hands!",
    href: "#",
    dayOfWeek: 5, // Tuesday
    time: "18:30",
    initialDateISO: "2025-11-07T16:30:00",
    upcoming: true,
  },
  {
    name: "Bracket Night",
    image:
      "https://images.unsplash.com/photo-1601933470928-8d99adf7dbe8?q=80&w=1200&auto=format",
    frequency: "Bi-Weekly",
    location: "BVC – Room N123",
    tagline: "Every second Thursday. Bring your A-game.",
    href: "#",
    dayOfWeek: 4, // Thursday
    time: "19:00",
    initialDateISO: "2025-10-16T19:00:00",
    upcoming: true,
  },
  {
    name: "Monthly Showdown",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200&auto=format",
    frequency: "Monthly",
    location: "Central Library Theater",
    tagline: "Glory, prizes, and salt.",
    href: "#",
    time: "13:00",
    initialDateISO: "2025-10-25T18:30:00",
    upcoming: false,
  },
  {
    name: "Regional Rumble",
    image:
      "https://images.unsplash.com/photo-1608430173106-2d88e4f06a1c?q=80&w=1200&auto=format",
    frequency: "Regional",
    location: "SAIT Campus Centre",
    tagline: "The best in Western Canada face off.",
    href: "#",
    initialDateISO: "2025-11-16T11:00:00",
    upcoming: true,
  },
  {
    name: "Training Grounds",
    image:
      "https://images.unsplash.com/photo-1612902376771-33ad58e8bede?q=80&w=1200&auto=format",
    frequency: "Weekly",
    location: "C-Space, Room 204",
    tagline: "Learn advanced techniques and level up your fundamentals.",
    href: "#",
    dayOfWeek: 5, // Friday
    time: "17:00",
    upcoming: true,
  },
  {
    name: "The Frostbite Invitational",
    image:
      "https://images.unsplash.com/photo-1577640972050-9e6ce37b68d4?q=80&w=1200&auto=format",
    frequency: "Regional",
    location: "Calgary Esports Arena",
    tagline: "A once-a-year spectacle. Who will claim the crown?",
    href: "#",
    initialDateISO: "2025-02-10T10:00:00",
    upcoming: false,
  },
];
