"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { naoTranslations } from "@/lib/i18n/nao-translations";

export function NaoFooter() {
  const { language } = useLanguage();
  const t = naoTranslations[language].footer;
  return (
    <footer className="nao-footer">
      <div className="nao-container nao-footer-grid">
        <div>
          <Link href="/" className="nao-footer-logo">
            <Image src="/logo/nao_full_dark.png" alt="NAO Group" width={145} height={49} />
          </Link>
          <p>{t.tagline}</p>
        </div>
        <div>
          <span>{t.explore}</span>
          <Link href="/#about">{t.about}</Link>
          <Link href="/#vision">{t.vision}</Link>
          <Link href="/#contact">{t.contact}</Link>
        </div>
        <div>
          <span>{t.products}</span>
          <Link href="/studynao">StudyNAO</Link>
          <Link href="/thinknao">ThinkNAO</Link>
        </div>
        <div className="nao-footer-end">
          © {new Date().getFullYear()} NAO Group<br />
          {t.closing}
        </div>
      </div>
    </footer>
  );
}
