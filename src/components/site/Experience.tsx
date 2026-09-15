import { useI18n } from "@/lib/i18n/I18nProvider";
import { Section, SectionHeader } from "./Section";

interface Entry {
  date: string;
  title: string;
  org: string;
  body: string;
  cert?: boolean;
}

const work: Entry[] = [
  {
    date: "JAN 2024 — NOW",
    title: "Senior Fullstack + AI Engineer",
    org: "Upwork · Top Rated Plus",
    body: "Building AI-first SaaS for US/EU founders. Claude, RAG, agents. Architecture → ship.",
  },
  {
    date: "DEC 2022 — JAN 2024",
    title: "Middle Frontend Developer",
    org: "Hirenest · Full-time",
    body: "Frontend ownership on an HRtech SaaS: component library, Stripe payment integration, complex business logic, performance optimization. React + TypeScript.",
  },
  {
    date: "OCT 2021 — DEC 2022",
    title: "Junior Frontend Developer",
    org: "Incode Group · Full-time",
    body: "Built multi-page sites and admin panels with complex logic. Worked on large projects solo and in team, communicated directly with clients. React + Tailwind.",
  },
];

const learning: Entry[] = [
  {
    date: "2026 — NOW",
    title: "Building with Claude API · MCP · Claude Code",
    org: "Anthropic Academy",
    body: "Official Anthropic courses: Claude API, Model Context Protocol (intro + advanced), Claude Code in Action. Ongoing.",
  },
  {
    date: "MAR 2024",
    title: "Modern React with Redux",
    org: "Udemy · Certificate",
    body: "Deep dive into React 18 + Redux Toolkit: hooks, context, performance patterns, production-grade state management.",
    cert: true,
  },
  {
    date: "AUG 2021",
    title: "Frontend Software Development Course",
    org: "Mate Academy · Certificate",
    body: "Part-time program: JavaScript, HTML/CSS, React, Redux. Foundation of my frontend career.",
    cert: true,
  },
];

function Col({ heading, entries }: { heading: string; entries: Entry[] }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3 text-xs tracking-wider text-muted-foreground">
        <span className="h-px w-6 bg-muted-foreground/40" />
        {heading}
      </div>
      <div className="flex flex-col gap-8">
        {entries.map((e, i) => (
          <div key={i} className="card-water rounded-sm border border-transparent p-4">
            <div className="mb-2 flex items-center gap-3 text-[11px] tracking-wider text-muted-foreground">
              <span className="size-2 bg-accent" />
              {e.date}
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">{e.title}</h3>
            <div className="mt-1 text-xs text-accent">{e.org}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            {e.cert && (
              <button className="mt-4 inline-flex items-center gap-2 rounded-sm border border-border bg-surface/40 px-3 py-2 text-[11px] text-accent">
                <span className="size-6 rounded-sm bg-surface-2" />
                view certificate ↗
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function GitGraph() {
  const cols = 53;
  const rows = 7;
  const cells = Array.from({ length: cols * rows }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const r = seed / 233280;
    const v = r < 0.55 ? 0 : r < 0.75 ? 1 : r < 0.9 ? 2 : 3;
    return v;
  });
  const shade = ["bg-surface-2/60", "bg-accent/25", "bg-accent/55", "bg-accent"];
  return (
    <div className="card-water mt-12 rounded-md border border-border bg-surface/40 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-mono text-sm text-foreground">github_activity.log</h4>
        <span className="text-xs text-muted-foreground">714 contributions in 2026</span>
      </div>
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridAutoRows: "12px" }}
      >
        {cells.map((v, i) => (
          <div key={i} className={`size-3 rounded-[2px] ${shade[v]}`} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
        <div className="flex gap-8">
          <span><span className="text-accent">0d</span> STREAK</span>
          <span><span className="text-accent">95</span> REPOS</span>
          <span><span className="text-accent">1</span> STARS</span>
        </div>
        <div className="flex items-center gap-1.5">
          less
          {shade.map((s, i) => (
            <span key={i} className={`size-3 rounded-[2px] ${s}`} />
          ))}
          more
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { t } = useI18n();
  return (
    <Section id="experience">
      <SectionHeader kicker={t("exp.kicker")} title={t("exp.title")} note={t("exp.note")} />
      <div className="grid gap-12 lg:grid-cols-2">
        <Col heading={t("exp.work")} entries={work} />
        <Col heading={t("exp.learning")} entries={learning} />
      </div>
      <GitGraph />
    </Section>
  );
}
