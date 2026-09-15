import { useState } from "react";
import { Briefcase, Linkedin, Github, Send, ArrowUpRight, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Section, SectionHeader } from "./Section";

const links: { label: string; value: string; Icon: LucideIcon }[] = [
  // { label: "UPWORK", value: "Top Rated · ~01199c1e86f23068ea", Icon: Briefcase },
  // { label: "Name", value: "/in/Christopher_Cruz", Icon: Linkedin },
  { label: "GITHUB", value: "/0xjoeldavis", Icon: Github },
  { label: "Gmail", value: "rikukato001@gmail.com", Icon: Send },
];

const prompts = [
  "What's your AI stack?",
  "Are you available now?",
  "Show me an AI project",
  "Hourly rate?",
  "How many years of experience do you have?",
];

export function Contact() {
  const { t } = useI18n();
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<{ role: "ai" | "user"; text: string }[]>([
    {
      role: "ai",
      text: "Hi 👋 I'm an AI trained on Riku's portfolio. Ask me about his stack, projects, AI experience, availability — anything.",
    },
  ]);
  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [
      ...m,
      { role: "user", text },
      { role: "ai", text: "Thanks — Riku will follow up directly. For an instant answer, ping him on Telegram @Akane." },
    ]);
    setInput("");
  };
  return (
    <Section id="contact">
      <SectionHeader kicker={t("contact.kicker")} title={t("contact.title")} note={t("contact.note")} />
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl">
            <span className="block text-foreground/80">{t("contact.h1")}</span>
            <span className="block text-accent">{t("contact.h2")}</span>
            <span className="block text-foreground/80">{t("contact.h3")}</span>
          </h3>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{t("contact.body")}</p>
          <div className="mt-10 flex flex-col">
            {links.map(({ label, value, Icon }) => (
              <a
                key={label}
                href="#"
                className="card-water grid grid-cols-[28px_110px_1fr_20px] items-center gap-4 rounded-sm border border-border bg-surface/40 px-5 py-4 text-sm transition-colors hover:bg-surface/60"
              >
                <Icon className="size-4 text-accent" strokeWidth={1.75} />
                <span className="text-[11px] tracking-wider text-muted-foreground">{label}</span>
                <span className="text-foreground">{value}</span>
                <ArrowUpRight className="size-4 text-muted-foreground" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
        <div className="card-water flex flex-col rounded-md border border-accent/30 bg-surface/40">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-sm">
            <span className="size-2 rounded-full bg-water" />
            <span className="tracking-wider text-foreground">ASK_Riku.AI</span>
          </div>
          <div className="min-h-[320px] flex-1 space-y-3 px-4 py-4 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "ai" ? "text-foreground/90" : "text-accent"}>
                <span className="text-accent">{m.role === "ai" ? "Riku.ai" : "you"}</span>
                <div className="mt-1">{m.role === "ai" ? "> " : ""}{m.text}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-border px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 text-sm"
            >
              <span className="text-accent">▸</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Riku…"
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
              />
            </form>
            <div className="mt-3 flex flex-wrap gap-2">
              {prompts.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="rounded-sm border border-border px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
