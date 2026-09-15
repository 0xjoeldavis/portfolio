import { useI18n } from "@/lib/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-6 py-6 text-[11px] tracking-wider text-muted-foreground md:flex-row">
        <span>{t("footer.line")}</span>
        <div className="flex gap-4">
          <span>{t("footer.tag1")}</span>
          <span>·</span>
          <span>{t("footer.tag2")}</span>
          <span>·</span>
          <span>{t("footer.tag3")}</span>
        </div>
      </div>
    </footer>
  );
}
