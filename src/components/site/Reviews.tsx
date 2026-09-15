import { useI18n } from "@/lib/i18n/I18nProvider";
import { Section, SectionHeader } from "./Section";

interface Review {
  file: string;
  project: string;
  text: string;
}

const reviews: Review[] = [
  { file: "~/upwork/review_001.md", project: "Web-Based Foodie Discovery App", text: "Absolute rock star. I would have never been able to get where I am without his help." },
  { file: "~/upwork/review_002.md", project: "Web App Development", text: "Riku is absolutely fantastic to work with. His work is great, the web app he built completely fit the specification. Super responsive with any issues." },
  { file: "~/upwork/review_003.md", project: "SaaS Project Follow Up", text: "It was great to work with Riku again. He is solution oriented and easy to communicate." },
  { file: "~/upwork/review_004.md", project: "Music Chat User Interface", text: "Riku built a fantastic front end interface for our platform, would highly recommend!" },
  { file: "~/upwork/review_005.md", project: "Frontend Development", text: "Great freelancer, done the job according the requirements, accommodated all the requests and done quality job on time even the deadline was very tight." },
  { file: "~/upwork/review_006.md", project: "Frontend Codebase Improvement", text: "Riku fixed our messy codebase in a blink of an eye. We have hired him to improve the frontend of our app and he has been doing so ever since." },
];

export function Reviews() {
  const { t } = useI18n();
  return (
    <Section id="reviews">
      <SectionHeader kicker={t("rev.kicker")} title={t("rev.title")} note={t("rev.note")} />
      <div className="grid gap-5 md:grid-cols-2">
        {reviews.map((r, i) => (
          <div key={i} className="card-water overflow-hidden rounded-md border border-border bg-surface/40">
            <div className="flex items-center justify-between border-b border-border bg-surface/60 px-4 py-2 text-xs">
              <span className="text-accent">{r.file}</span>
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="grid grid-cols-[40px_1fr] gap-3 px-4 py-5 text-sm">
              <div className="select-none border-r border-border pr-3 text-right text-muted">
                <div>1</div><div>2</div><div>3</div>
              </div>
              <div>
                <div className="text-muted-foreground">{`// Project: ${r.project}`}</div>
                <div className="mt-3 text-foreground/90">"{r.text}"</div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[11px]">
              <span className="text-accent">Upwork Client</span>
              <span className="text-muted-foreground">· Upwork · Verified</span>
              <span className="text-muted-foreground">via Upwork</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
