// src/services/eventsService.ts
import { TablesDB, Query } from "appwrite";
import { client } from "../lib/appwrite";

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

const DB_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID as string;
const TABLE_ID = import.meta.env.VITE_APPWRITE_EVENTS_TABLE_ID as string;

const tables = new TablesDB(client);

// Rows can be returned as { rows: Array<...> }. Normalize & map to EventItem.
function mapRowToEvent(row: any): EventItem {
  const d = row?.data ?? row ?? {};
  return {
    name: String(d.name ?? ""),
    frequency: (d.frequency as EventItem["frequency"]) ?? "Popup",
    image: String(d.image ?? ""),
    location: String(d.location ?? ""),
    tagline: String(d.tagline ?? ""),
    href: d.href ? String(d.href) : undefined,
    upcoming: Boolean(d.upcoming),
    dayOfWeek: typeof d.dayOfWeek === "number" ? d.dayOfWeek : undefined,
    time: d.time ? String(d.time) : undefined,
    initialDateISO: d.initialDateISO ? String(d.initialDateISO) : undefined,
  };
}

export async function fetchEvents(): Promise<EventItem[]> {
  const res = await tables.listRows({
    databaseId: DB_ID,
    tableId: TABLE_ID,
  });

  const rows = (res as any)?.rows ?? [];
  return rows.map(mapRowToEvent);
}
