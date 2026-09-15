import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/I18nProvider";

function Terminal() {
  return (
    <div className="card-water rounded-md border border-border bg-surface/60 text-[12.5px] leading-relaxed">
      <div className="flex items-center justify-between border-b border-border px-4 py-2 text-muted-foreground">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-accent" />
        </div>
        <span className="text-[11px]">~/Riku/portfolio · zsh · 10:56:54</span>
        <span />
      </div>
      <pre className="overflow-auto px-5 py-4 font-mono text-foreground/90">
{`Riku@dev ~ $ whoami
→ Riku "J" Cruz
→ Fullstack + AI Engineer

Riku@dev ~ $ cat ./mission.json
{
  "build":    "AI-native web apps",
  "speed":    "idea → prod, fast",
  "quality":  "clean, typed, tested",
  "stack":    ["react", "next", "node", "claude"],
  "available": true
}

Riku@dev ~ $ ./say_hi.sh`}<span className="ml-0.5 inline-block size-2 translate-y-[1px] bg-accent blink" />
      </pre>
    </div>
  );
}

function PhotoCard() {
  return (
    <div className="card-water rounded-md border border-border bg-surface/60 p-4">
      <div className="flex gap-4">
        <div className="flex size-24 shrink-0 items-center justify-center rounded-sm border border-border bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,oklch(0.3_0.01_250)_6px,oklch(0.3_0.01_250)_7px)] text-[10px] text-muted-foreground">
          [ photo ]
        </div>
        <dl className="flex-1 space-y-1 text-xs">
          {[
            ["HUMAN", "Riku Kato"],
            ["LOC", "Earth · Remote"],
            ["TZ", "UTC+3"],
            ["STATUS", "online"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between border-b border-dashed border-border/60 py-1">
              <dt className="text-muted-foreground tracking-wider">{k}</dt>
              <dd className={k === "STATUS" ? "text-accent" : "text-foreground"}>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();
  const tags = ["hero.tag1", "hero.tag2", "hero.tag3", "hero.tag4"];
  return (
    <section className="relative border-b border-border">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col">
          <div className="mb-8 flex flex-wrap gap-3 text-xs text-muted-foreground">
            {tags.map((k, i) => (
              <span key={k} className="flex items-center gap-3">
                {i > 0 && <span className="text-muted">/</span>}
                <span className="tracking-wider">{t(k)}</span>
              </span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(64px,11vw,180px)] font-bold leading-[0.88] tracking-tight">
            <span className="block text-foreground/85">Riku</span>
            <span className="block text-accent">Kato</span>
          </h1>
          <div className="mt-12 h-2 w-20 bg-accent" />
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="text-muted">└</span> {t("hero.tagline")}
            <span className="ml-1 inline-block size-2 translate-y-[1px] bg-accent blink" />
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="card-water rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground"
            >
              {t("hero.cta1")} →
            </a>
            <a
              href="#contact"
              className="card-water rounded-sm border border-border px-5 py-3 text-sm text-foreground"
            >
              {t("hero.cta2")} ↗
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Terminal />
          <PhotoCard />
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [
    "REACT", "NEXT.JS", "TYPESCRIPT", "NODE", "CLAUDE", "GPT", "CURSOR",
    "AVAILABLE FOR HIRE", "SHIPPING SINCE 2021", "UPWORK TOP RATED",
    "AI ENGINEERING", "FULLSTACK",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-t border-border py-4">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-xs text-muted-foreground">
        {doubled.map((x, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>{x}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}
