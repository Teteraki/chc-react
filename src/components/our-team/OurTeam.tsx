import React from "react";

// --- Types --------------------------------------------------------------
export type SocialKind =
  | "x"
  | "instagram"
  | "twitch"
  | "youtube"
  | "github"
  | "site";

export type SocialLink = {
  kind: SocialKind;
  href: string;
  label?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  headshot: string; // URL
  bio?: string;
  tags?: string[]; // e.g., ["TO", "Production", "Stream"]
  socials?: SocialLink[];
};

// --- Sample Data (local-only) -------------------------------------------
const TEAM: TeamMember[] = [
  {
    id: "dylan",
    name: "Dylan Sanders",
    role: "Organizer • Full-Stack",
    headshot: "https://placehold.co/400x400/png?text=Dylan",
    bio: "Leads A/V content & web for CHC. Focused on smooth brackets, great vibes, and clean code.",
    tags: ["TO", "Dev", "Stream"],
    socials: [
      { kind: "github", href: "https://github.com/Teteraki" },
      { kind: "site", href: "#", label: "Portfolio" },
    ],
  },
  {
    id: "alex",
    name: "Alex Kim",
    role: "Broadcast • Production",
    headshot: "https://placehold.co/400x400/png?text=Alex",
    bio: "Scenes, cams, and crispy audio. Elevates every stream with reliable tech.",
    tags: ["Stream", "AV", "OBS"],
    socials: [
      { kind: "twitch", href: "https://twitch.tv/" },
      { kind: "youtube", href: "https://youtube.com/" },
    ],
  },
  {
    id: "sam",
    name: "Sam Patel",
    role: "Sponsorships • Community",
    headshot: "https://placehold.co/400x400/png?text=Sam",
    bio: "Local partnerships, prizing, and outreach. Bridges CHC with YYC orgs.",
    tags: ["Partners", "Comms"],
    socials: [
      { kind: "instagram", href: "https://instagram.com/" },
      { kind: "x", href: "https://x.com/" },
    ],
  },
  {
    id: "riley",
    name: "Riley Chen",
    role: "Bracket Lead • Rules",
    headshot: "https://placehold.co/400x400/png?text=Riley",
    bio: "Runs pools, seeds fairly, and keeps the day moving. Player-first coordinator.",
    tags: ["TO", "Rules"],
    socials: [{ kind: "site", href: "#", label: "Ruleset" }],
  },
];

function SocialIcon({ kind }: { kind: SocialKind }) {
  const base = "h-4 w-4";
  switch (kind) {
    case "x":
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={base}>
          <path
            fill="currentColor"
            d="M18.9 2H22l-7.7 8.8L22.8 22h-6.2l-4.9-6.2L6 22H2l8.2-9.4L1.5 2h6.3l4.4 5.6L18.9 2z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={base}>
          <path
            fill="currentColor"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"
          />
        </svg>
      );
    case "twitch":
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={base}>
          <path
            fill="currentColor"
            d="M4 3h16v10.5L16 17h-3l-2 2H8v-2H4V3zm2 2v10h4v2l2-2h3l3-3V5H6zm8 2h2v4h-2V7zm-4 0h2v4H10V7z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={base}>
          <path
            fill="currentColor"
            d="M23 12s0-3-.38-4.41A3 3 0 0 0 20.59 5C18.5 4.5 12 4.5 12 4.5s-6.5 0-8.59.5A3 3 0 0 0 1.38 7.59C1 9 1 12 1 12s0 3 .38 4.41A3 3 0 0 0 3.41 19c2.09.5 8.59.5 8.59.5s6.5 0 8.59-.5a3 3 0 0 0 2.03-2.59C23 15 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z"
          />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={base}>
          <path
            fill="currentColor"
            d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.77.41-1.27.75-1.56-2.55-.29-5.23-1.29-5.23-5.77 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.63.24 2.83.12 3.13.75.82 1.2 1.86 1.2 3.14 0 4.49-2.69 5.48-5.25 5.76.42.36.8 1.07.8 2.16v3.2c0 .31.2.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"
          />
        </svg>
      );
    case "site":
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={base}>
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.93 9H16.9c-.13-2.12-.77-4.04-1.79-5.47A8.02 8.02 0 0 1 19.93 11zM12 4.07c1.3 1.56 2.16 3.92 2.28 6.93H9.72C9.84 8 10.7 5.63 12 4.07zM4.07 13H7.1c.13 2.12.77 4.04 1.79 5.47A8.02 8.02 0 0 1 4.07 13zM11.72 13h2.56c-.12 2.01-.98 4.37-2.28 5.93C10.7 17.37 9.84 15.01 9.72 13h2zM16.9 13h3.03a8.02 8.02 0 0 1-4.82 5.47c1.02-1.43 1.66-3.35 1.79-5.47zM7.1 11H4.07A8.02 8.02 0 0 1 8.9 5.53C7.88 6.96 7.24 8.88 7.1 11z"
          />
        </svg>
      );
  }
}

// --- Card ---------------------------------------------------------------
const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition">
      <div className="flex items-start gap-4">
        <img
          src={member.headshot}
          alt={`${member.name} headshot`}
          className="h-20 w-20 rounded-xl object-cover ring-1 ring-white/20"
        />
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-white">
            {member.name}
          </h3>
          <p className="text-sm text-gray-300">{member.role}</p>
          {member.tags && member.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {member.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-xs text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {member.bio && (
        <p className="mt-4 line-clamp-3 text-sm text-gray-200/90">
          {member.bio}
        </p>
      )}

      {member.socials && member.socials.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {member.socials.map((s) => (
            <a
              key={`${member.id}-${s.kind}`}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-gray-100 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
              aria-label={s.label ?? s.kind}
            >
              <SocialIcon kind={s.kind} />
              <span className="capitalize">{s.label ?? s.kind}</span>
            </a>
          ))}
        </div>
      )}

      {/* subtle accent on hover */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-yellow-500 opacity-0 transition-opacity group-hover:opacity-100" />
    </article>
  );
};

// --- Grid ---------------------------------------------------------------
const TeamGrid: React.FC<{ members: TeamMember[] }> = ({ members }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {members.map((m) => (
        <TeamCard key={m.id} member={m} />
      ))}
    </div>
  );
};

// --- Page (Drop into a route or section) --------------------------------
export const OurTeam = ({ members = TEAM }: { members?: TeamMember[] }) => {
  return (
    <section id="team" className="relative isolate overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
            People behind the brackets
          </h2>
          <p className="mt-3 text-md text-gray-300">
            Community-first organizers, producers, and partners building
            Calgary&apos;s Smash scene.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10">
          <TeamGrid members={members} />
        </div>
      </div>
    </section>
  );
};

// --- Usage --------------------------------------------------------------
// import { OurTeam } from "./OurTeam";
// <OurTeam />
// or pass your own array: <OurTeam members={myTeamArray} />
