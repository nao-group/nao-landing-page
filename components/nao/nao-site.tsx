"use client";

import Image from "next/image";
import Link from "next/link";
import { NaoFooter } from "./site-footer";
import { LanguageSwitcher } from "@/components/landing/language-switcher";
import { useLanguage } from "@/lib/i18n/language-context";
import { naoTranslations } from "@/lib/i18n/nao-translations";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { FormEvent, type PointerEvent, useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, ChevronDown, GraduationCap, Menu, X } from "lucide-react";

const WHATSAPP_NUMBER = "6285284229998";

function tiltProductCard(event: PointerEvent<HTMLAnchorElement>) {
  if (event.pointerType === "touch") return;
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  card.style.setProperty("--tilt-x", `${(-y * 10).toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
  card.style.setProperty("--shift-x", `${(x * 12).toFixed(2)}px`);
  card.style.setProperty("--shift-y", `${(y * 12).toFixed(2)}px`);
  card.style.setProperty("--copy-shift-x", `${(-x * 4).toFixed(2)}px`);
  card.style.setProperty("--copy-shift-y", `${(-y * 4).toFixed(2)}px`);
  card.style.setProperty("--shine-x", `${((x + 0.5) * 100).toFixed(1)}%`);
  card.style.setProperty("--shine-y", `${((y + 0.5) * 100).toFixed(1)}%`);
}

function resetProductCard(event: PointerEvent<HTMLAnchorElement>) {
  const card = event.currentTarget;
  card.style.setProperty("--tilt-x", "0deg");
  card.style.setProperty("--tilt-y", "0deg");
  card.style.setProperty("--shift-x", "0px");
  card.style.setProperty("--shift-y", "0px");
  card.style.setProperty("--copy-shift-x", "0px");
  card.style.setProperty("--copy-shift-y", "0px");
}

function Header({ brand = "nao" }: { brand?: "nao" | "study" }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { language } = useLanguage();
  const t = naoTranslations[language].nav;
  return (
    <header className="nao-header">
      <div className="nao-nav-wrap">
        <Link className={`nao-logo ${brand === "study" ? "nao-logo-study" : ""}`} href={brand === "study" ? "/studynao" : "/"} aria-label={brand === "study" ? "StudyNAO" : t.homeAria} onClick={() => setOpen(false)}>
          <Image src={brand === "study" ? "/logo/study_nao_dark.png" : "/logo/nao_full_dark.png"} alt={brand === "study" ? "StudyNAO" : "NAO Group"} width={brand === "study" ? 160 : 132} height={brand === "study" ? 39 : 45} priority />
        </Link>
        <nav className={`nao-nav-links ${open ? "nao-nav-open" : ""}`} aria-label={t.label}>
          {brand === "study" ? <>
            <Link href="/" onClick={() => setOpen(false)}>NAO Group</Link>
            <Link href="#benefits" onClick={() => setOpen(false)}>{t.studyBenefits}</Link>
            <Link href="#class-types" onClick={() => setOpen(false)}>{t.studyClasses}</Link>
            <Link href="#independent-practice" onClick={() => setOpen(false)}>{t.studyPractice}</Link>
          </> : <>
            <Link href="/#about" onClick={() => setOpen(false)}>{t.about}</Link>
            <div className={`nao-product-menu ${productsOpen ? "nao-product-expanded" : ""}`}>
              <button className="nao-dropdown-trigger" type="button" aria-expanded={productsOpen} onClick={() => setProductsOpen(!productsOpen)}>{t.products} <ChevronDown size={14} /></button>
              <div className="nao-dropdown">
                <Link href="/studynao" rel="noopener noreferrer" onClick={() => setOpen(false)}><GraduationCap size={18} /> StudyNAO <ArrowUpRight size={15} /></Link>
                <Link href="/thinknao" rel="noopener noreferrer" onClick={() => setOpen(false)}><BookOpen size={18} /> ThinkNAO <ArrowUpRight size={15} /></Link>
              </div>
            </div>
            <Link href="/#vision" onClick={() => setOpen(false)}>{t.vision}</Link>
            <Link href="/#community" onClick={() => setOpen(false)}>{t.community}</Link>
          </>}
          <Link href={brand === "study" ? "#consultation" : "/#contact"} className="nao-mobile-contact" onClick={() => setOpen(false)}>{brand === "study" ? t.studyConsult : t.consult}</Link>
        </nav>
        <div className="nao-nav-actions"><LanguageSwitcher /><Link href={brand === "study" ? "#consultation" : "/#contact"} className="nao-nav-cta">{brand === "study" ? t.studyConsult : t.consult} <ArrowUpRight size={16} /></Link></div>
        <button className="nao-menu-toggle" type="button" aria-expanded={open} aria-label={open ? t.close : t.open} onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
      </div>
    </header>
  );
}

function NaoFormMascot() {
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mascot = mascotRef.current;
    if (!mascot || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const followPointer = (event: globalThis.PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = mascot.getBoundingClientRect();
        const dx = event.clientX - (bounds.left + bounds.width / 2);
        const dy = event.clientY - (bounds.top + bounds.height * 0.27);
        const distance = Math.min(1, Math.hypot(dx, dy) / 220);
        const angle = Math.atan2(dy, dx);
        mascot.style.setProperty("--eye-x", `${(Math.cos(angle) * 5 * distance).toFixed(2)}px`);
        mascot.style.setProperty("--eye-y", `${(Math.sin(angle) * 3 * distance).toFixed(2)}px`);
        frame = 0;
      });
    };

    window.addEventListener("pointermove", followPointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", followPointer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="nao-form-mascot" ref={mascotRef} aria-hidden="true">
      <Image src="/images/nao-mascot-form.png" alt="" width={1145} height={1374} sizes="140px" />
      <span className="nao-mascot-eye nao-mascot-eye-left" />
      <span className="nao-mascot-eye nao-mascot-eye-right" />
    </div>
  );
}

function ContactForm({ compact = false }: { compact?: boolean }) {
  const { language } = useLanguage();
  const t = naoTranslations[language].form;
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [contactError, setContactError] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanContact = contact.trim();
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanContact);
    const looksLikePhone = /^[+\d\s()\-.]{8,}$/.test(cleanContact) && cleanContact.replace(/\D/g, "").length >= 8;
    if (!looksLikeEmail && !looksLikePhone) {
      setContactError(true);
      return;
    }
    setContactError(false);
    const text = `${t.waGreeting}\n\n${t.waName}: ${name.trim()}\n${t.waContact}: ${cleanContact}\n${t.waMessage}: ${message.trim()}`;
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  return (
    <div className={`nao-form-card ${compact ? "nao-form-compact" : ""}`}>
      <div className="nao-form-heading">
        <NaoFormMascot />
        <div><h2>{t.title} <em>{t.accent}</em></h2><p>{t.intro}</p></div>
      </div>
      <form onSubmit={submit}>
        <div className="nao-field-row">
          <label>{t.name}<input required maxLength={80} autoComplete="name" placeholder={t.namePlaceholder} value={name} onChange={(event) => setName(event.target.value)} /></label>
          <label>{t.contact}<input required maxLength={100} autoComplete="email" placeholder={t.contactPlaceholder} value={contact} aria-invalid={!!contactError} aria-describedby={contactError ? "nao-contact-error" : undefined} onChange={(event) => { setContact(event.target.value); if (contactError) setContactError(false); }} />{contactError && <span className="nao-field-error" id="nao-contact-error" role="alert">{t.contactError}</span>}</label>
        </div>
        <label>{t.message}<textarea required maxLength={1000} rows={compact ? 3 : 4} placeholder={t.messagePlaceholder} value={message} onChange={(event) => setMessage(event.target.value)} /></label>
        <button type="submit" className="nao-submit">{t.submit} <ArrowUpRight size={19} /></button>
        <p className="nao-form-note">{t.note}</p>
      </form>
    </div>
  );
}

export function NaoHome() {
  useScrollReveal("nao");
  const { language } = useLanguage();
  const t = naoTranslations[language].home;
  const community = naoTranslations[language].community;
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = heroRef.current;
      if (!hero) return;
      const travel = Math.max(hero.offsetHeight - window.innerHeight, 1);
      const progress = Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / travel));
      hero.style.setProperty("--nao-hero-scroll", progress.toFixed(3));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <div className="nao-site"><a href="#content" className="skip-link">{naoTranslations[language].nav.skip}</a><Header /><main id="content">
    <section className="nao-landscape-hero" id="home" ref={heroRef}>
      <span className="nao-contact-anchor" id="contact" aria-hidden="true" />
      <div className="nao-landscape-sticky">
        <Image className="nao-landscape-bg" src="/images/hero/china-background.webp" alt="" fill sizes="100vw" priority />
        <div className="nao-landscape-wash" />
        <div className="nao-landscape-copy">
          <h1>{t.heroLead} <em>{t.heroAccent}</em></h1>
          <p>{t.heroBody}</p>
          <div className="nao-hero-actions"><a className="nao-pill-button" href="#contact">{t.consult} <ArrowUpRight size={19} /></a><a className="nao-text-button" href="#products">{t.explore} <ArrowDown size={17} /></a></div>
        </div>
        <div className="nao-landscape-form-stage"><div className="nao-landscape-form-wrap"><ContactForm /></div></div>
        <Image className="nao-landscape-wall" src="/images/hero/great-wall-layer.png" alt="" fill sizes="100vw" priority aria-hidden="true" />
        <a className="nao-landscape-scroll" href="#contact">{t.scroll} <ArrowDown size={17} /></a>
      </div>
    </section>
    <div className="nao-ticker" aria-hidden="true"><div>{t.ticker} <span>✳</span> {t.ticker2} <span>✳</span> {t.ticker3} <span>✳</span> {t.ticker} <span>✳</span> {t.ticker2} <span>✳</span></div></div>
    <section className="nao-about nao-container" id="about"><div className="nao-section-label nao-reveal">{t.aboutLabel}</div><div className="nao-about-grid"><h2 className="nao-reveal">{t.aboutLead} <em>{t.aboutAccent}</em></h2><div className="nao-reveal"><p className="nao-large-copy">{t.aboutIntro}</p><p>{t.aboutBody}</p><a className="nao-inline-link" href="#vision">{t.aboutLink} <ArrowUpRight size={17} /></a></div></div></section>
    <section className="nao-products" id="products"><div className="nao-container"><div className="nao-products-head nao-reveal"><div><span className="nao-section-label">{t.productsLabel}</span><h2>{t.productsLead}<br /><em>{t.productsAccent}</em></h2></div><p>{t.productsIntro}</p></div><div className="nao-product-grid"><Link href="/studynao" className="nao-product-card nao-study nao-reveal" onPointerMove={tiltProductCard} onPointerLeave={resetProductCard}><div className="nao-card-top"><span>{t.studyType}</span><ArrowUpRight size={25} /></div><div className="nao-study-art" aria-hidden="true"><div className="nao-art-disc"><GraduationCap size={76} strokeWidth={1.25} /></div><span className="nao-art-chip chip-left">{t.studyChip1}<br />{t.studyChip2}</span><span className="nao-art-chip chip-right">{t.studyChip3}<br />{t.studyChip4}</span></div><div className="nao-card-copy"><span>{t.studyEyebrow}</span><h3 className="nao-card-heading"><Image className="nao-card-logo nao-card-logo-study" src="/logo/study_nao_dark.png" alt="StudyNAO" width={270} height={66} /></h3><p>{t.studyBody}</p><strong>{t.studyLink} <ArrowRight size={18} /></strong></div></Link><Link href="/thinknao" className="nao-product-card nao-think nao-reveal" onPointerMove={tiltProductCard} onPointerLeave={resetProductCard}><div className="nao-card-top"><span>{t.thinkType}</span><ArrowUpRight size={25} /></div><div className="nao-think-art" aria-hidden="true"><div className="nao-screen"><div className="nao-screen-top"><i /><i /><i /><span>thinknao.app</span></div><div className="nao-screen-body"><div className="nao-screen-symbol">∑</div><div><span>{t.thinkArtLabel}</span><b>{t.thinkArtTitle}</b><div className="nao-progress"><i /></div><small>{t.thinkArtNote}</small></div></div></div><span className="nao-float-score">↗ &nbsp;{t.thinkArtScore}</span></div><div className="nao-card-copy"><span>{t.thinkEyebrow}</span><h3 className="nao-card-heading"><Image className="nao-card-logo nao-card-logo-think" src="/logo/think_nao_dark.png" alt="ThinkNAO" width={270} height={70} /></h3><p>{t.thinkBody}</p><strong>{t.thinkLink} <ArrowRight size={18} /></strong></div></Link></div></div></section>
    <section className="nao-vision" id="vision"><div className="nao-container nao-vision-grid"><div className="nao-reveal"><span className="nao-section-label">{t.visionLabel}</span><h2>{t.visionLead} <em>{t.visionAccent}</em></h2><div className="nao-vision-graphic" aria-hidden="true"><span>NAO</span><span className="nao-vision-star">✳</span><span>NOW</span></div></div><div className="nao-vision-list"><div className="nao-reveal"><span>{t.visionSubLabel}</span><h3>{t.visionTitle}</h3><p>{t.visionBody}</p></div><div className="nao-reveal"><span>{t.missionSubLabel}</span><h3>{t.missionTitle}</h3><p>{t.missionBody}</p></div></div></div></section>
    <section className="nao-community" id="community">
      <div className="nao-container nao-community-card nao-reveal">
        <div className="nao-community-illustration"><Image src="/images/community/gathernao-study-group.png" alt={community.imageAlt} width={1254} height={1254} sizes="(max-width: 820px) 90vw, 48vw" /></div>
        <div className="nao-community-copy">
          <div className="nao-community-label"><Image src="/images/community/discord.svg" alt={community.logoAlt} width={30} height={30} /><span>{community.label}</span></div>
          <h2>{community.title} <em>{community.accent}</em></h2>
          <p>{community.body}</p>
          <a className="nao-photo-button" href={process.env.NEXT_PUBLIC_DISCORD_URL || "#contact"} target={process.env.NEXT_PUBLIC_DISCORD_URL ? "_blank" : undefined} rel={process.env.NEXT_PUBLIC_DISCORD_URL ? "noopener noreferrer" : undefined}>{community.action} <ArrowUpRight size={19} /></a>
        </div>
      </div>
    </section>
    <section className="nao-end-cta"><div className="nao-container nao-end-inner nao-reveal"><span className="nao-section-label">{t.ctaLabel}</span><h2>{t.ctaLead} <em>{t.ctaAccent}</em></h2><p>{t.ctaBody}</p><a className="nao-pill-button" href="#contact">{t.ctaButton} <ArrowUpRight size={19} /></a></div></section>
  </main><NaoFooter /></div>;
}

export function StudyNaoPage() {
  useScrollReveal("nao");
  const { language } = useLanguage();
  const t = naoTranslations[language].study;
  return <div className="nao-site"><a href="#content" className="skip-link">{naoTranslations[language].nav.skip}</a><Header brand="study" /><main id="content">
    <section className="nao-photo-hero nao-study-photo-hero">
      <div className="nao-photo-frame">
        <Image className="nao-photo-image" src="/images/hero/studynao-tutor-photo.jpg" alt={t.heroImageAlt} fill sizes="(max-width: 820px) 100vw, 1320px" priority />
        <div className="nao-photo-overlay" />
        <div className="nao-photo-content">
          <Link className="nao-photo-back" href="/">{t.back}</Link>
          <span className="nao-photo-kicker">{t.kicker}</span>
          <h1>{t.heroLead} <em>{t.heroAccent}</em></h1>
          <p>{t.heroBody}</p>
          <a href="#consultation" className="nao-photo-button">{t.heroButton} <ArrowUpRight size={19} /></a>
        </div>
        <div className="nao-photo-foot"><span>{t.foot}</span></div>
      </div>
    </section>
    <section className="nao-study-benefits nao-container" id="benefits">
      <div className="nao-reveal"><span className="nao-section-label">{t.benefitsLabel}</span><h2>{t.benefitsLead} <em>{t.benefitsAccent}</em></h2></div>
      <div className="nao-benefit-grid">
        {[
          { number: "01", title: t.benefit1Title, body: t.benefit1Body, image: "/images/studynao/clear-path.png" },
          { number: "02", title: t.benefit2Title, body: t.benefit2Body, image: "/images/studynao/learn-together.png" },
          { number: "03", title: t.benefit3Title, body: t.benefit3Body, image: "/images/studynao/stay-focused.png" },
        ].map((benefit) => (
          <article className="nao-benefit-card nao-reveal" key={benefit.number}>
            <div className="nao-benefit-art"><Image src={benefit.image} alt="" fill sizes="(max-width: 600px) 90vw, (max-width: 820px) 45vw, 30vw" /></div>
            <div className="nao-benefit-copy"><h3>{benefit.title}</h3><p>{benefit.body}</p></div>
          </article>
        ))}
      </div>
    </section>
    <section className="nao-study-classes" id="class-types"><div className="nao-container">
      <div className="nao-study-classes-head nao-reveal"><span className="nao-section-label">{t.classesLabel}</span><h2>{t.classesLead} <em>{t.classesAccent}</em></h2><p>{t.classesBody}</p></div>
      <div className="nao-study-class-grid">
        <article className="nao-study-class-card nao-study-class-private nao-reveal"><span className="nao-study-class-index">01 / STUDYNAO</span><div className="nao-study-class-visual"><Image src="/images/studynao/private-class.png" alt="" fill sizes="(max-width: 600px) 90vw, 45vw" /></div><div className="nao-study-class-copy"><h3>{t.privateTitle}</h3><p>{t.privateBody}</p></div></article>
        <article className="nao-study-class-card nao-study-class-group nao-reveal"><span className="nao-study-class-index">02 / STUDYNAO</span><div className="nao-study-class-visual"><Image src="/images/studynao/group-class.png" alt="" fill sizes="(max-width: 600px) 90vw, 45vw" /></div><div className="nao-study-class-copy"><h3>{t.groupTitle}</h3><p>{t.groupBody}</p></div></article>
      </div>
    </div></section>
    <section className="nao-study-compare" id="independent-practice"><div className="nao-container nao-study-compare-grid"><div className="nao-reveal"><span className="nao-section-label">{t.compareLabel}</span><h2>{t.compareLead} <em>{t.compareAccent}</em></h2><p>{t.compareBody}</p><Link href="/thinknao" className="nao-inline-link">{t.compareLink} <ArrowUpRight size={18} /></Link></div></div></section>
    <section className="nao-study-contact nao-container" id="consultation"><div className="nao-reveal"><span className="nao-section-label">{t.contactLabel}</span><h2>{t.contactLead} <em>{t.contactAccent}</em></h2><p>{t.contactBody}</p></div><div className="nao-reveal"><ContactForm compact /></div></section>
  </main><NaoFooter /></div>;
}
