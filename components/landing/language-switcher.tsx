"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import type { Language } from "@/lib/i18n/translations";

const options: { code: Language; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label={{ id: "Pilih bahasa", en: "Select language", zh: "选择语言" }[language]}>
      {options.map((opt) => (
        <button
          key={opt.code}
          type="button"
          className={`lang-btn${language === opt.code ? " lang-btn-active" : ""}`}
          onClick={() => setLanguage(opt.code)}
          aria-pressed={language === opt.code}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
