/* eslint-disable @typescript-eslint/no-explicit-any */
// src/services/eventsService.ts
import { TablesDB } from "appwrite";
import { client } from "../lib/appwrite";
import type { EventItem } from "../types/EventItem";

const DB_ID = import.meta.env.VITE_APPWRITE_DB_ID as string;
const TABLE_ID = import.meta.env.VITE_APPWRITE_EVENTS_TABLE_ID as string;

const tables = new TablesDB(client);

// Rows can be returned as { rows: Array<...> }. Normalize & map to EventItem.
function mapRowToEvent(row: any): EventItem {
  const d = row?.data ?? row ?? {};

  return {
    name: String(d.name ?? ""),
    frequency: (d.frequency as EventItem["frequency"]) ?? "Popup",

    // 🔧 map Appwrite columns -> your props
    image: String(d.image_url ?? d.image ?? ""), // image_url -> image
    location: String(d.location ?? ""),
    tagline: String(d.tagline ?? ""),
    href: d.startgg_href
      ? String(d.startgg_href)
      : d.href
      ? String(d.href)
      : undefined, // startgg_href -> href
    upcoming: Boolean(d.upcoming),
    dayOfWeek:
      typeof d.day_of_week === "number"
        ? d.day_of_week
        : typeof d.dayOfWeek === "number"
        ? d.dayOfWeek
        : undefined, // day_of_week -> dayOfWeek
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
