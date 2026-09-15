import type { ReactNode } from "react";

export function SectionHeader({
  kicker,
  title,
  note,
}: {
  kicker: string;
  title: string;
  note: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-2 text-xs text-muted-foreground">{kicker}</div>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          <span className="text-accent">&gt;</span> {title}
        </h2>
      </div>
      <p className="text-xs text-muted-foreground md:max-w-sm md:text-right">{note}</p>
    </div>
  );
}

export function Section({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 py-20">{children}</div>
    </section>
  );
}
