import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback(
    (key: string) => translations[lang][key] ?? translations.en[key] ?? key,
    [lang],
  );
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useI18n outside provider");
  return v;
}
