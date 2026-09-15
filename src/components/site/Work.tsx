import { useI18n } from "@/lib/i18n/I18nProvider";
import { Section, SectionHeader } from "./Section";

interface Project {
  idx: string;
  tags: string[];
  year: string;
  title: string;
  badges: { label: string; tone?: "ai" | "nda" }[];
  desc: string;
  stack: string[];
}

const projects: Project[] = [
  {
    idx: "[01]",
    tags: ["AI", "MUSIC"],
    year: "2025",
    title: "Delphos — AI music copilot",
    badges: [{ label: "AI", tone: "ai" }, { label: "NDA", tone: "nda" }],
    desc: "Frontend for an AI music copilot that lets you build custom \"soundworlds\", generate full tracks and stems from chord progressions, and manage projects for artists, labels and platforms in a single dashboard.",
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Auth0", "Wavesurfer.js", "Web Audio"],
  },
  {
    idx: "[02]",
    tags: ["HRTECH"],
    year: "2023",
    title: "Hirenest — pre-employment assessment",
    badges: [{ label: "NDA", tone: "nda" }],
    desc: "Frontend platform for pre-employment assessments that lets employers browse and configure tests, build role-specific assessment flows, manage a rich test library, and track candidate results in a single dashboard.",
    stack: ["React", "TypeScript", "Redux + Redux-Saga", "Tailwind CSS", "i18next", "Stripe", "Jest / RTL"],
  },
  {
    idx: "[03]",
    tags: ["MARKETPLACE"],
    year: "2025",
    title: "MoveShop24 — moving services",
    badges: [{ label: "NDA", tone: "nda" }],
    desc: "Fullstack platform for moving services: customers describe their relocation needs, the system scores and structures requests, then routes them to vetted moving partners who respond with tailored, trackable offers.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
  },
  {
    idx: "[04]",
    tags: ["WEB", "SSR"],
    year: "2025",
    title: "Eco Holiday — children's eco camp",
    badges: [{ label: "NDA", tone: "nda" }],
    desc: "Website for a children's eco camp in the Carpathians (ages 8–16). Parallax hero, seasonal shift scheduling, daily activity breakdown, photo gallery, team showcase, pricing, and parent reviews. Telegram Bot integration for booking inquiries, JSON-LD structured data, and full SEO.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Telegram Bot API", "Schema.org / JSON-LD", "Vercel"],
  },
  {
    idx: "[05]",
    tags: ["FULLSTACK", "SPORT"],
    year: "2026",
    title: "World Crokinole Rankings",
    badges: [{ label: "NDA", tone: "nda" }],
    desc: "Global competitive platform for the board game crokinole. Tournament management with multi-stage brackets, Elo-based world rankings across singles/doubles/laurels, player profiles with match history, club directory, and paid event registration. Admin console for full CRUD management.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Stripe", "Recharts", "React Hook Form", "Sass", "next-intl"],
  },
  {
    idx: "[06]",
    tags: ["AI", "FULLSTACK"],
    year: "2026",
    title: "Prodigious Piggy — food discovery",
    badges: [{ label: "AI", tone: "ai" }, { label: "NDA", tone: "nda" }],
    desc: "AI-powered global restaurant discovery platform. Chat with \"Piggy\" — a GPT-4o-mini assistant with RAG over a curated place database — to find restaurants, cafes and bars worldwide. Features interactive Mapbox maps, trip planning, sentiment-scored places, and Stripe subscription tiers.",
    stack: ["React 18", "TypeScript", "Vite", "Supabase", "OpenAI GPT-4o", "Mapbox GL", "TailwindCSS", "shadcn/ui", "Stripe", "Framer Motion", "TanStack Query", "Zod"],
  },
];

export function Work() {
  const { t } = useI18n();
  return (
    <Section id="work">
      <SectionHeader kicker={t("work.kicker")} title={t("work.title")} note={t("work.note")} />
      <div className="flex flex-col divide-y divide-border">
        {projects.map((p, i) => (
          <article
            key={p.idx}
            className="card-water group grid gap-6 rounded-sm p-6 transition-colors hover:bg-surface/40 lg:grid-cols-[80px_1.2fr_1.4fr_1fr_40px]"
          >
            <div className="text-xs text-muted-foreground">{p.idx}</div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] tracking-wider text-muted-foreground">
                {p.tags.map((t, j) => (
                  <span key={j} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent text-accent" />
                    {t}
                    {j < p.tags.length - 1 && <span className="text-muted">·</span>}
                  </span>
                ))}
                <span className="text-muted text-accent">·</span>
                <span className="text-accent">{p.year}</span>
              </div>
              <h3 className={"font-display text-2xl font-semibold leading-tight"/*  + (i % 2 === 0 ? "text-accent" : "text-foreground") */}>
                {p.title}
              </h3>
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {p.badges.map((b, j) => (
                  <span
                    key={j}
                    className={
                      "rounded-sm border px-1.5 py-0.5 text-[10px] tracking-wider " +
                      (b.tone === "ai"
                        ? "border-fuchsia-400/40 text-fuchsia-300"
                        : "border-border text-muted-foreground")
                    }
                  >
                    {b.label}
                  </span>
                ))}
              </div>
              {p.desc}
            </div>
            <div className="flex flex-wrap gap-1.5 self-start">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border border-border bg-surface/60 px-2 py-1 text-[10px] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-start justify-end text-muted-foreground transition-colors group-hover:text-accent">
              ↗
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
