import React, { useEffect, useState } from "react";
import { StatusUpdateBar } from "./StatusUpdateBar";
import { fetchStatus, type StatusRow } from "../../services/statusService";

export const StatusBarUpdateContainer: React.FC = () => {
  const [data, setData] = useState<StatusRow | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadStatusBar() {
      try {
        const row = await fetchStatus();

        if (!cancelled) {
          setData(row);
        }
      } catch (error) {
        console.error("Failed to load status bar:", error);
        if (!cancelled) {
          setData(null);
        }
      }
    }

    loadStatusBar();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!data) return null;

  return (
    <StatusUpdateBar
      visible={data.visible}
      kind={data.status_kind}
      message={data.message}
      link={
        data.href_link && data.href_label
          ? {
              href: data.href_link,
              label: data.href_label,
            }
          : null
      }
    />
  );
};
