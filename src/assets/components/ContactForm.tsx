import React, { useRef, useState, useEffect } from "react";

export const ContactForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (panelRef.current) setMaxH(panelRef.current.scrollHeight);
  }, [open]);

  return (
    <div className="mt-12 text-center">
      <p className="text-sm text-gray-600">
        Want to team up for a Calgary Smash event or reach out?
      </p>

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chc-collab-form"
        className="inline-block mt-3 rounded-full bg-gray-900 px-6 py-3 text-white font-semibold hover:opacity-90 transition"
      >
        {open ? "Hide contact form" : "Contact us!"}
      </button>

      {/* Collapsible form */}
      <div
        id="chc-collab-form"
        className="mx-auto mt-6 w-full max-w-2xl overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? maxH : 0 }}
        aria-hidden={!open}
      >
        <div
          ref={panelRef}
          className="rounded-2xl border border-gray-200 bg-white p-6 text-left"
        >
          <h3 className="text-lg font-semibold">Send an email!</h3>
          <a href="info@coldhands.org" className="mt-1 text-sm text-yellow-400">
            info@coldhands.org
          </a>

          <form
            className="mt-4 grid grid-cols-1 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We’ll be in touch soon.");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name*
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organization (optional)
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message*
              </label>
              <textarea
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                className="rounded-lg bg-gray-900 px-5 py-2.5 text-white font-semibold hover:opacity-90 transition"
              >
                Send message
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-gray-600 underline underline-offset-2 hover:text-gray-900"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
