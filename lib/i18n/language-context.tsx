"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Language, translations, Translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "thinknao-lang";

function detectFromBrowser(): Language {
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("id")) return "id";
  if (lang.startsWith("zh")) return "zh";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    // 1. Check saved preference
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && saved in translations) {
      setLanguageState(saved);
    } else {
      setLanguageState(detectFromBrowser());
    }

    const syncFromOtherTab = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && event.newValue && event.newValue in translations) {
        setLanguageState(event.newValue as Language);
      }
    };
    window.addEventListener("storage", syncFromOtherTab);
    return () => window.removeEventListener("storage", syncFromOtherTab);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
