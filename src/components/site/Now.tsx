import { useI18n } from "@/lib/i18n/I18nProvider";
import { Section, SectionHeader } from "./Section";
import { useNow } from "./Hero";

export function Now() {
  const { t } = useI18n();
  const now = useNow();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return (
    <Section id="now">
      <SectionHeader kicker={t("now.kicker")} title={t("now.title")} note={t("now.note")} />
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="card-water rounded-md border border-border bg-surface/40 p-8">
          <div className="mb-2 text-[11px] tracking-wider text-muted-foreground">
            {now.toDateString().toUpperCase()} · STATUS_REPORT
          </div>
          <h3 className="font-display text-2xl font-semibold">{t("now.heading")}</h3>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed">
            {[
              <>Freelancing on <span className="text-accent">Upwork</span> — AI-native SaaS and fullstack projects for US/EU founders.</>,
              <><span className="text-accent">Cursor + Claude Code</span> daily — AI-assisted development on every project.</>,
              <>Studying <span className="text-accent">Anthropic courses</span>: Claude API, MCP, Claude Code in Action.</>,
              <>Open to <span className="text-accent">1 new project</span>. AI-first preferred, fullstack welcome.</>,
              <>Reading: <span className="text-accent">"Designing Data-Intensive Applications"</span> — back for round two.</>,
            ].map((b, i) => (
              <li key={i} className="flex gap-3 border-b border-dashed border-border/60 pb-3 last:border-0">
                <span className="text-accent">▸</span>
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="card-water rounded-md border border-border bg-surface/40 p-6">
            <div className="flex items-center justify-between text-[11px] tracking-wider text-muted-foreground">
              <span>{t("now.local")}</span>
              <span>UTC+3</span>
            </div>
            <div suppressHydrationWarning className="mt-4 font-display text-5xl font-bold tabular-nums text-accent">
              {hh}:{mm}:{ss}
            </div>
            <div className="mt-4 text-[11px] text-muted-foreground">{t("now.hours")}</div>
          </div>
          <div className="card-water rounded-md border border-border bg-surface/40 p-6">
            <div className="flex items-center justify-between text-[11px] tracking-wider text-muted-foreground">
              <span>NOW PLAYING</span>
              <span className="flex items-center gap-1.5 text-accent">
                <span className="size-1.5 rounded-full bg-accent" /> LIVE
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-sm bg-surface-2 p-3">
              <div className="size-12 shrink-0 bg-gradient-to-br from-amber-400 to-emerald-600" />
              <div className="flex-1">
                <div className="text-sm font-semibold">Shape Of My Heart</div>
                <div className="text-xs text-muted-foreground">Sting</div>
              </div>
              <button className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground">▶</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
