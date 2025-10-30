export type EventItem = {
  name: string;
  frequency: "Weekly" | "Bi-Weekly" | "Monthly" | "Regional" | "Popup" | string;
  image: string;
  location: string;
  tagline: string;
  href?: string;
  upcoming: boolean;
  dayOfWeek?: number; // 0..6
  time?: string; // "HH:mm"
  initialDateISO?: string;
};
