export const About = () => {
  return (
    <section className="w-full bg-slate-200">
      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Building Community Through Competition
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Cold Hands Collective (CHC) hosts inclusive, well‑run Super Smash
            Bros. events in Calgary — crafted for newcomers and top players
            alike.
          </p>
        </div>

        {/* Value props */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Inclusive by design",
              body: "Welcoming brackets, accessible venues, supportive culture.",
            },
            {
              title: "Consistent quality",
              body: "Planning, scheduling & reliable production.",
            },
            {
              title: "Player‑first ops",
              body: "Hospitality, fairness, and fun, even for new attendees.",
            },
            {
              title: "Built with Calgary",
              body: "Community‑led and locally rooted — always.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.body}</p>
            </div>
          ))}
        </div>

        {/* What We Do */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold">What We Do</h2>
          <p className="mt-2 text-gray-600">
            All our events are planned, produced, and executed by CHC with
            support from the community and partners.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
            {/* Operations & Logistics */}
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold">Operations & Logistics</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Venue logistics & partnerships</li>
                <li>Scheduling & bracket flow</li>
                <li>Player & talent hospitality</li>
              </ul>
            </div>

            {/* Broadcast & Media */}
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold">Broadcast & Media</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Hardware & knowledge for livestreaming</li>
                <li>Social media & community advertising</li>
                <li>Highlights & featured matches</li>
              </ul>
            </div>
            {/* Execution */}
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold">Execution</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Staff & volunteer management</li>
                <li>On‑site problem solving</li>
                <li>Program & run‑of‑show</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="mt-16 rounded-2xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-xl sm:text-2xl font-bold">How We Work</h2>
          <p className="mt-2 text-gray-700">
            While we don’t necessarily consult out tournament hosting, we rather
            collaborate with partners to bring{" "}
            <span className="font-semibold">our</span> events to life — aligning
            on goals, sharing responsibilities, and delivering a consistent CHC
            experience.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Want to team up for a Calgary Smash event?
          </p>
          <a
            href="#contact"
            className="inline-block mt-3 rounded-full bg-gray-900 px-6 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            Collaborate with CHC
          </a>
        </div>
      </div>
    </section>
  );
};
