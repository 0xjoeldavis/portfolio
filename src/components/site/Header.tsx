import { useI18n } from "@/lib/i18n/I18nProvider";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const sections = ["about", "stack", "work", "experience", "reviews", "now", "contact"] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-sm">
          <span className="inline-block size-2.5 bg-accent" />
          <span className="font-semibold tracking-wider text-foreground">Riku.SYS</span>
          <span className="text-muted">v2.6.0</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {sections.map((s, i) => (
            <a
              key={s}
              href={`#${s}`}
              className="transition-colors hover:text-foreground"
            >
              <span className="text-muted">0{i + 1}</span>{" "}
              <span>{t(`nav.${s}`)}</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-sm border border-border px-3 py-1.5 text-xs tracking-wider sm:flex">
            <span className="inline-block size-1.5 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
            {t("nav.available")}
          </span>
          <div className="flex items-center gap-0 overflow-hidden rounded-sm border border-border text-xs">
            {(["en", "ua"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={
                  "px-2.5 py-1.5 uppercase tracking-wider transition-colors " +
                  (lang === l
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
