import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Section, SectionHeader } from "./Section";

type Cat = "frontend" | "backend" | "ai" | "infra" | "tooling";

interface Item {
  name: string;
  cat: Cat;
  years: number;
}

const items: Item[] = [
  { name: "React", cat: "frontend", years: 5 },
  { name: "Next.js", cat: "frontend", years: 4 },
  { name: "TypeScript", cat: "frontend", years: 5 },
  { name: "Tailwind CSS", cat: "frontend", years: 4 },
  { name: "shadcn/ui", cat: "frontend", years: 2 },
  { name: "Vite", cat: "frontend", years: 3 },
  { name: "Node.js", cat: "backend", years: 5 },
  { name: "Bun", cat: "backend", years: 1 },
  { name: "Hono", cat: "backend", years: 1 },
  { name: "PostgreSQL", cat: "backend", years: 3 },
  { name: "MongoDB", cat: "backend", years: 5 },
  { name: "Supabase", cat: "backend", years: 2 },
  { name: "tRPC", cat: "backend", years: 2 },
  { name: "Drizzle ORM", cat: "backend", years: 1 },
  { name: "Claude API", cat: "ai", years: 3 },
  { name: "OpenAI", cat: "ai", years: 4 },
  { name: "Vercel AI SDK", cat: "ai", years: 1 },
  { name: "MCP", cat: "ai", years: 1 },
  { name: "LangGraph", cat: "ai", years: 1 },
  { name: "LangChain", cat: "ai", years: 2 },
  { name: "Vector DBs", cat: "ai", years: 3 },
  { name: "RAG", cat: "ai", years: 3 },
  { name: "AI Agents", cat: "ai", years: 2 },
  { name: "Vercel", cat: "infra", years: 5 },
  { name: "Docker", cat: "infra", years: 4 },
  { name: "AWS", cat: "infra", years: 3 },
  { name: "GitHub CI", cat: "infra", years: 5 },
  { name: "Trigger.dev", cat: "infra", years: 1 },
  { name: "Cursor", cat: "tooling", years: 2 },
  { name: "Claude Code", cat: "tooling", years: 1 },
  { name: "Zod", cat: "tooling", years: 3 },
  { name: "Figma", cat: "tooling", years: 4 },
  { name: "Linear", cat: "tooling", years: 3 },
];

const catLabels: Record<Cat, string> = {
  frontend: "FRONTEND",
  backend: "BACKEND",
  ai: "AI / LLM",
  infra: "INFRA / DEVOPS",
  tooling: "TOOLING",
};

export function Stack() {
  const { t } = useI18n();
  const [active, setActive] = useState<Cat | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? items : items.filter((i) => i.cat === active)),
    [active],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: items.length };
    for (const i of items) c[i.cat] = (c[i.cat] ?? 0) + 1;
    return c;
  }, []);

  const cats: ("all" | Cat)[] = ["all", "frontend", "backend", "ai", "infra", "tooling"];

  return (
    <Section id="stack">
      <SectionHeader kicker={t("stack.kicker")} title={t("stack.title")} note={t("stack.note")} />
      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <aside className="flex flex-col gap-2">
          {cats.map((c) => {
            const isActive = active === c;
            const label = c === "all" ? t("stack.all") : t(`stack.${c}`);
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={
                  "card-water flex items-center justify-between rounded-sm border px-4 py-3 text-left text-xs tracking-wider transition-colors " +
                  (isActive
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-surface/40 text-muted-foreground hover:text-foreground")
                }
              >
                <span>{label}</span>
                <span className={isActive ? "text-accent-foreground/70" : "text-muted"}>
                  [{counts[c] ?? 0}]
                </span>
              </button>
            );
          })}
        </aside>
        <div className="grid auto-rows-min grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {filtered.map((i) => (
            <div
              key={i.name}
              className="card-water rounded-sm border border-border bg-surface/40 p-4"
            >
              <div className="text-sm font-semibold text-foreground">{i.name}</div>
              <div className="mt-1 text-[10px] tracking-wider text-muted-foreground">
                {catLabels[i.cat]} · {i.years}Y
              </div>
              <div className="mt-3 h-px w-full bg-border">
                <div
                  className="h-px bg-accent"
                  style={{ width: `${Math.min(100, i.years * 18 + 20)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
