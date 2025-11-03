import React, { useEffect, useState } from "react";

export type StatusKind = "info" | "warning" | "success" | "alert";

interface StatusUpdateBarProps {
  /** FUTURE: make all of these controlled via db table entry */
  visible?: boolean; // <- added: controls initial visibility
  kind?: StatusKind;
  message?: string;
  link?: { href: string; label: string } | null;
}

export const StatusUpdateBar: React.FC<StatusUpdateBarProps> = ({
  // TODO: Replace these hard-coded defaults by values coming from your admin UI / context / API
  visible = true, // <- you can pass this from an admin controller later
  kind = "info", // hard set right now
  message = "Next CHC event: Heat Check — Sat, Nov 8. Registration is open!",
  link = { href: "#events", label: "View details" },
}) => {
  // Local (uncontrolled) visibility state for dismiss animation & Esc key
  // FUTURE: i want a fully controlled component, sync this with the `visible` prop via onChange
  const [isVisible, setIsVisible] = useState<boolean>(visible);

  // Close on Escape
  useEffect(() => {
    if (!isVisible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVisible(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVisible]);

  if (!isVisible) return null;

  const palette: Record<
    StatusKind,
    { bg: string; text: string; ring: string }
  > = {
    info: {
      bg: "bg-blue-600/90",
      text: "text-white",
      ring: "ring-blue-400/50",
    },
    warning: {
      bg: "bg-amber-500/95",
      text: "text-black",
      ring: "ring-amber-300/60",
    },
    success: {
      bg: "bg-emerald-600/90",
      text: "text-white",
      ring: "ring-emerald-400/50",
    },
    alert: {
      bg: "bg-rose-600/90",
      text: "text-white",
      ring: "ring-rose-400/50",
    },
  };

  const Icon: React.FC = () => {
    switch (kind) {
      case "warning":
        return (
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.514 11.582c.75 1.335-.213 2.994-1.742 2.994H3.485c-1.53 0-2.492-1.66-1.742-2.994L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V8a1 1 0 112 0v3a1 1 0 01-1 1z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "success":
        return (
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
          </svg>
        );
      case "alert":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
          </svg>
        );
      case "info":
      default:
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-6h2zm0-8h-2V7h2z" />
          </svg>
        );
    }
  };

  const tone = palette[kind];

  return (
    <div
      role="status"
      aria-live="polite"
      // NOTE: fixed Tailwind "supports-[]" syntax for backdrop-filter
      className={`${tone.bg} ${tone.text} backdrop-blur supports-[backdrop-filter]:bg-opacity-85`}
    >
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between gap-3 rounded-xl px-4 py-2 ring-1 ${tone.ring} shadow-sm`}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
              <Icon />
            </span>

            <p className="text-sm sm:text-base font-medium">
              {message}{" "}
              {link && (
                <>
                  <a
                    href={link.href}
                    className="underline underline-offset-2 decoration-white/40 hover:decoration-white"
                  >
                    {link.label}
                  </a>
                  <span className="sr-only"> (opens section)</span>
                </>
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="group -m-1 inline-flex items-center rounded-md p-1 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Dismiss update"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
