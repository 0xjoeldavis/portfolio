import { useI18n } from "@/lib/i18n/I18nProvider";
import { Section, SectionHeader } from "./Section";

export function About() {
  const { t } = useI18n();
  const stats: [string, string, string][] = [
    ["5", "+", t("about.stat1")],
    ["100", "+", t("about.stat2")],
    ["18", "", t("about.stat3")],
    ["100", "%", t("about.stat4")],
  ];
  return (
    <Section id="about">
      <SectionHeader kicker={t("about.kicker")} title={t("about.title")} note={t("about.note")} />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
        <div className="grid grid-cols-2 overflow-hidden rounded-md border border-border bg-surface/40">
          {stats.map(([n, sfx, lbl], i) => (
            <div
              key={i}
              className="card-water border-border p-8 [&:nth-child(-n+2)]:border-b [&:nth-child(odd)]:border-r"
            >
              <div className="font-display text-5xl font-bold text-foreground">
                {n}
                <span className="text-accent">{sfx}</span>
              </div>
              <div className="mt-3 text-xs tracking-wider text-muted-foreground">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
