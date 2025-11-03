// Header.tsx
import React, { useEffect, useRef, useState } from "react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const navItems = [
    { label: "Upcoming Events", href: "#upcoming" },
    { label: "About", href: "#about" },
    { label: "Past Events", href: "#past" },
    { label: "Our Team", href: "#team" },
  ];

  const handleNavClick = () => setOpen(false);

  return (
    <header className="relative bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600 dark:text-teal-300" href="#">
          <img
            src="https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68095c21001977dae23e/view?project=68007df0002d3c24adaa&mode=admin"
            className="h-12"
            alt="Cold Hands Collective"
          />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Desktop nav */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-yellow-400"
                href="#staff"
              >
                Staff Login
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={btnRef}
              type="button"
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              {/* Hamburger ↔ Close */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`md:hidden origin-top overflow-hidden transition-all duration-200 ${
          open
            ? "pointer-events-auto max-h-[60vh]"
            : "pointer-events-none max-h-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-b-2xl bg-slate-900/95 backdrop-blur">
            <nav aria-label="Mobile" className="py-2">
              <ul className="flex flex-col divide-y divide-white/10">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      className="block px-4 py-3 text-base text-white transition hover:bg-white/5 text-center"
                      href={item.href}
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
