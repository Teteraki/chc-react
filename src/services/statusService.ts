/* eslint-disable @typescript-eslint/no-explicit-any */
// src/services/statusService.ts
import { TablesDB } from "appwrite";
import { client } from "../lib/appwrite";
import type { StatusKind } from "../components/status-update/StatusUpdateBar";

const DB_ID = import.meta.env.VITE_APPWRITE_DB_ID as string;
const TABLE_ID = import.meta.env.VITE_APPWRITE_STATUS_TABLE_ID as string;

const tables = new TablesDB(client);

export type StatusRow = {
  $id: string;
  visible: boolean;
  status_kind: StatusKind;
  message: string;
  href_link: string;
  href_label: string;
};

function mapRowToStatus(row: any): StatusRow {
  const d = row?.data ?? row ?? {};

  return {
    $id: String(d.$id ?? row?.$id ?? ""),
    visible: Boolean(d.visible),
    status_kind: (d.status_kind as StatusKind) ?? "info",
    message: String(d.message ?? ""),
    href_link: String(d.href_link ?? ""),
    href_label: String(d.href_label ?? ""),
  };
}

export async function fetchStatus(): Promise<StatusRow> {
  const res = await tables.listRows({
    databaseId: DB_ID,
    tableId: TABLE_ID,
  });

  const rows = (res as any)?.rows ?? [];

  if (!rows.length) {
    throw new Error("No rows found in status_bar table.");
  }

  return mapRowToStatus(rows[0]);
}
