"use client";

import Image from "next/image";
import { NaoFooter } from "@/components/nao/site-footer";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Bot,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  GraduationCap,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageSwitcher } from "./language-switcher";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { subjectTopics, subjectTopicLabels, type SubjectId } from "@/lib/subject-topics";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const planPrices: Record<string, { current: string; original: string }> = {
  "THINK-1MONTH": { current: "Rp99.000", original: "Rp129.000" },
  "THINK-3MONTH": { current: "Rp269.000", original: "Rp329.000" },
  "THINK-6MONTH": { current: "Rp499.000", original: "Rp549.000" },
};

// Static (non-text) configuration for subjects
const subjectConfig: Array<{ id: SubjectId; labelCn: string; gradient: string; symbol: string }> = [
  {
    id: "math",
    labelCn: "数学",
    gradient: "linear-gradient(150deg, #244365 0%, #0b2848 100%)",
    symbol: "∑",
  },
  {
    id: "physics",
    labelCn: "物理",
    gradient: "linear-gradient(150deg, #3d647c 0%, #173b56 100%)",
    symbol: "φ",
  },
  {
    id: "chemistry",
    labelCn: "化学",
    gradient: "linear-gradient(150deg, #687498 0%, #394765 100%)",
    symbol: "⬡",
  },
  {
    id: "stem-chinese",
    labelCn: "理科汉语",
    gradient: "linear-gradient(150deg, #967541 0%, #624b2c 100%)",
    symbol: "理",
  },
  {
    id: "humanities-chinese",
    labelCn: "文科汉语",
    gradient: "linear-gradient(150deg, #667b83 0%, #344c59 100%)",
    symbol: "文",
  },
];

// Static configuration for audiences (non-text parts)
const audienceConfig = [
  { icon: BookOpenCheck, image: "/images/made-for/high-school.png", accent: "gold" },
  { icon: Target, image: "/images/made-for/independent.png", accent: "indigo" },
  { icon: GraduationCap, image: "/images/made-for/applicant.png", accent: "ink" },
];

const featureClasses = [
  "feature-ai",
  "feature-practice",
  "feature-exam",
  "feature-leaderboard",
];

function FeatureVisual({ type }: { type: string }) {
  const { t } = useLanguage();
  const ai = t.features.aiChat;
  const pr = t.features.practice;
  const ex = t.features.exam;

  if (type === "feature-ai") {
    return (
      <div className="ai-visual" aria-hidden="true">
        <div className="chat-message user-message">{ai.userMsg}</div>
        <div className="chat-message nao-message">
          <div className="nao-mark"><Bot size={15} /></div>
          <p>{ai.naoMsg.split("a = F / m")[0]}<strong>a = F / m</strong>{ai.naoMsg.split("a = F / m")[1]}</p>
        </div>
        <div className="answer-options"><i>{ai.opt1}</i><i className="selected">{ai.opt2}</i><i>{ai.opt3}</i></div>
      </div>
    );
  }

  if (type === "feature-practice") {
    return (
      <div className="practice-visual" aria-hidden="true">
        <div className="difficulty-row"><span>{pr.label}</span><strong>Level 06</strong></div>
        <div className="difficulty-track"><i /><i /><i /><i /><i /><i className="current" /><i /><i /></div>
        <div className="ratio-card"><span>{pr.setMix}</span><div><b className="easy">{pr.easy}</b><b className="medium">{pr.medium}</b><b className="hard">{pr.hard}</b></div></div>
        <div className="generated-pill"><Sparkles size={14} /> {pr.generated}</div>
      </div>
    );
  }

  if (type === "feature-exam") {
    return (
      <div className="exam-visual" aria-hidden="true">
        <div className="exam-top"><span>{ex.title}</span><div><Clock3 size={14} /> 01:28:43</div></div>
        <div className="exam-question"><small>{ex.questionOf}</small><p>{ex.question}</p></div>
        <div className="exam-progress"><i /></div>
      </div>
    );
  }

  return (
    <div className="leaderboard-visual" aria-hidden="true">
      {[
        ["1", "NA", "Nadia A.", "9,840"],
        ["2", "KW", "Kevin W.", "9,620"],
        ["3", "FT", "Felicia T.", "9,410"],
      ].map(([rank, initials, name, score], index) => (
        <div className={`rank-row rank-${index + 1}`} key={rank}>
          <strong>{rank}</strong><i>{initials}</i><span>{name}</span><b>{score} XP</b>
        </div>
      ))}
    </div>
  );
}

function ThinkNaoLandingInner() {
  useScrollReveal("think");
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSubject, setActiveSubject] = useState<SubjectId>("math");
  const [topicModal, setTopicModal] = useState<SubjectId | null>(null);
  const [topicModalOpen, setTopicModalOpen] = useState(false);
  const pricingTrackRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMenuOpen(false);

  // Derived data from translations
  const features = t.features.items.map((item, i) => ({
    ...item,
    className: featureClasses[i],
  }));

  const subjects = subjectConfig.map((cfg, i) => ({
    ...cfg,
    label: t.subjects.items[i].label,
    description: t.subjects.items[i].description,
  }));
  const topicLabels = subjectTopicLabels[language];
  const modalSubject = subjects.find((subject) => subject.id === topicModal);

  const scrollPricing = (direction: -1 | 1) => {
    const track = pricingTrackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".price-card");
    const distance = (card?.offsetWidth ?? 330) + 18;
    track.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  const audiences = audienceConfig.map((cfg, i) => ({
    ...cfg,
    title: t.madeFor.audiences[i].title,
    body: t.madeFor.audiences[i].body,
    benefits: t.madeFor.audiences[i].benefits,
  }));

  return (
    <main id="main-content" className="site-shell" lang={language}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="ThinkNAO home">
          <Image src="/logo/think_nao_dark.png" alt="ThinkNAO" width={142} height={36} priority />
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={closeMenu}>NAO Group</a>
          <a href="#features" onClick={closeMenu}>{t.nav.features}</a>
          <a href="#subjects" onClick={closeMenu}>{t.nav.subjects}</a>
          <a href="#pricing" onClick={closeMenu}>{t.nav.pricing}</a>
          <a href="#faq" onClick={closeMenu}>{t.nav.faq}</a>
          <div className="mobile-only think-mobile-language"><LanguageSwitcher /></div>
          <a className="nav-login mobile-only" href="https://thinknao-web.vercel.app/" target="_blank" rel="noreferrer" onClick={closeMenu}>{t.nav.login}</a>
          <a className="button button-small mobile-only" href="#pricing" onClick={closeMenu}>{t.nav.startLearning} <ArrowRight size={15} /></a>
        </div>
        <div className="nav-actions">
          <LanguageSwitcher />
          <a className="nav-login" href="https://thinknao-web.vercel.app/" target="_blank" rel="noreferrer">{t.nav.login}</a>
          <a className="button button-small" href="#pricing">{t.nav.startLearning} <ArrowRight size={15} /></a>
        </div>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <section className="nao-photo-hero think-photo-hero" id="top">
        <div className="nao-photo-frame">
          <Image className="nao-photo-image" src="/images/hero/thinknao-study-photo.jpg" alt={t.photoHero.imageAlt} fill sizes="(max-width: 820px) 100vw, 1320px" priority />
          <div className="nao-photo-overlay" />
          <div className="nao-photo-content">
            <a className="nao-photo-back" href="/">{t.photoHero.back}</a>
            <span className="nao-photo-kicker">{t.photoHero.kicker}</span>
            <h1>{t.photoHero.headingLead} <em>{t.photoHero.headingAccent}</em></h1>
            <p>{t.photoHero.body}</p>
            <a className="nao-photo-button" href="#features">{t.photoHero.button} <ArrowUpRight size={19} /></a>
          </div>
          <div className="nao-photo-foot"><span>{t.photoHero.foot}</span></div>
        </div>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading split-heading" data-reveal>
          <div><span className="section-number">{t.features.sectionNumber}</span><p>{t.features.label}</p></div>
          <h2>{t.features.heading1}<br /><em>{t.features.heading2}</em></h2>
          <p>{t.features.subheading}</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <article className={`feature-card ${feature.className}`} key={feature.className} data-reveal style={{ "--delay": `${index * 45}ms` } as React.CSSProperties}>
              <div className="feature-copy">
                <span>{feature.eyebrow}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
              <FeatureVisual type={feature.className} />
            </article>
          ))}
        </div>
      </section>

      <section className="section subjects-section" id="subjects">
        <div className="subjects-header split-heading" data-reveal>
          <div><span className="section-number">{t.subjects.sectionNumber}</span><p>{t.subjects.label}</p></div>
          <h2>{t.subjects.heading1}<br /><em>{t.subjects.heading2}</em></h2>
          <p>{t.subjects.subheading}</p>
        </div>
        <div
          className="subjects-strip"
          data-reveal
          onPointerMove={(event) => {
            if (event.pointerType === "touch") return;
            const card = (event.target as HTMLElement).closest<HTMLElement>(".subject-card");
            const id = card?.dataset.subjectId as SubjectId | undefined;
            if (id && id !== activeSubject) setActiveSubject(id);
          }}
        >
          {subjects.map((subject) => (
            <article
              key={subject.id}
              data-subject-id={subject.id}
              className={`subject-card${activeSubject === subject.id ? " is-active" : ""}`}
              style={{ "--subject-gradient": subject.gradient } as React.CSSProperties}
              onFocus={() => setActiveSubject(subject.id)}
              onClick={() => setActiveSubject(subject.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveSubject(subject.id);
                }
              }}
              tabIndex={0}
              role="group"
              aria-label={subject.label}
              aria-expanded={activeSubject === subject.id}
            >
              <div className="subject-bg" aria-hidden="true" />
              <span className="subject-symbol" aria-hidden="true">{subject.symbol}</span>

              <div className="subject-collapsed" aria-hidden={activeSubject === subject.id}>
                <span className={`subject-label-vertical${language === "zh" ? " subject-label-vertical--cjk" : ""}`}>{subject.label}</span>
              </div>

              <div className="subject-expanded" aria-hidden={activeSubject !== subject.id}>
                <div className="subject-topic-preview">
                  <span>{topicLabels.preview}</span>
                  <ol>
                    {subjectTopics[subject.id].slice(0, 5).map((topic, index) => (
                      <li key={topic.code}><b>{String(index + 1).padStart(2, "0")}</b>{topic[language]}</li>
                    ))}
                  </ol>
                  {subjectTopics[subject.id].length > 5 && (
                    <button type="button" className="subject-more" onClick={(event) => { event.stopPropagation(); setTopicModal(subject.id); setTopicModalOpen(true); }}>
                      {topicLabels.more} <ArrowUpRight size={15} />
                    </button>
                  )}
                </div>
                <div className="subject-expanded-copy">
                  <span className="subject-cn" style={language === "zh" ? { display: "none" } : undefined}>{subject.labelCn}</span>
                  <h3>{subject.label}</h3>
                  <p>{subject.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Dialog open={topicModalOpen} onOpenChange={setTopicModalOpen}>
          <DialogContent className="subject-topic-dialog">
            <DialogHeader>
              <span className="subject-dialog-eyebrow">{topicLabels.preview}</span>
              <DialogTitle>{topicLabels.all}: {modalSubject?.label}</DialogTitle>
              <DialogDescription>{topicLabels.description}</DialogDescription>
            </DialogHeader>
            {topicModal && (
              <ol className="subject-dialog-list">
                {subjectTopics[topicModal].map((topic, index) => (
                  <li key={topic.code}><span>{String(index + 1).padStart(2, "0")}</span><strong>{topic[language]}</strong></li>
                ))}
              </ol>
            )}
          </DialogContent>
        </Dialog>
      </section>

      <section className="section made-for-section" id="made-for">
        <div className="made-for-intro" data-reveal>
          <div className="section-label"><span>{t.madeFor.sectionNumber}</span> {t.madeFor.label}</div>
          <h2>{t.madeFor.heading1}<br /><em>{t.madeFor.heading2}</em></h2>
          <p>{t.madeFor.subheading}</p>
          <div className="path-doodle" aria-hidden="true"><span>{t.madeFor.doodle1}<br />{t.madeFor.doodle2}</span><i /></div>
        </div>
        <div className="audience-grid">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <article className={`audience-card audience-${audience.accent}`} key={audience.accent} data-reveal style={{ "--delay": `${index * 50}ms` } as React.CSSProperties}>
                <div className="audience-copy">
                  <div className="audience-title"><span><Icon size={22} /></span><h3>{audience.title}</h3></div>
                  <p>{audience.body}</p>
                  <ul>{audience.benefits.map((benefit, bi) => <li key={bi}><Check size={14} /> {benefit}</li>)}</ul>
                </div>
                <Image className="audience-image" src={audience.image} alt={`${audience.title} using ThinkNAO`} width={1363} height={1402} sizes="(max-width: 820px) 80vw, 290px" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="section-heading centered-heading" data-reveal>
          <div className="section-label"><span>{t.pricing.sectionNumber}</span> {t.pricing.label}</div>
          <h2>{t.pricing.heading1}<br /><em>{t.pricing.heading2}</em></h2>
          <p>{t.pricing.subheading}</p>
        </div>
        <div className="pricing-scroll-controls">
          <button type="button" aria-label={t.pricing.previousPlans} onClick={() => scrollPricing(-1)}><ChevronLeft size={20} /></button>
          <button type="button" aria-label={t.pricing.nextPlans} onClick={() => scrollPricing(1)}><ChevronRight size={20} /></button>
        </div>
        <div className="pricing-grid" ref={pricingTrackRef} role="region" aria-label={t.pricing.label} tabIndex={0}>
          {t.pricing.plans.map((plan) => (
            <article key={plan.id} className={`price-card${plan.popular ? " price-featured" : ""}`} data-reveal>
              {plan.savingsBadge && (
                <div className="popular-label"><Sparkles size={14} /> {plan.savingsBadge}</div>
              )}
              <div className="price-head"><span>{plan.name}</span></div>
              {planPrices[plan.id] && <div className="price-original"><s>{planPrices[plan.id].original}</s></div>}
              <div className="price">
                <strong>{planPrices[plan.id]?.current ?? plan.price}</strong>
              </div>
              {planPrices[plan.id] && <p className="price-monthly">Rp{plan.price} {t.pricing.perMonth}</p>}
              {plan.billingNote && <p className="price-billing-note">{plan.billingNote}</p>}
              <div className="plan-access">
                <strong>{plan.accessLabel}</strong>
                <ul>
                  {plan.access.map((item) => (
                    <li key={item}>
                      {plan.id === "THINK-FREE-TRIAL" ? <X size={15} aria-hidden="true" /> : <Check size={15} aria-hidden="true" />}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                className={`button ${plan.popular ? "button-cream" : "button-outline"}`}
                href={plan.id === "THINK-FREE-TRIAL"
                  ? `${process.env.NEXT_PUBLIC_MEMBER_URL ?? "https://thinknao-web.vercel.app"}/register?redirect=${encodeURIComponent("/onboarding")}`
                  : `${process.env.NEXT_PUBLIC_MEMBER_URL ?? "https://thinknao-web.vercel.app"}/checkout?plan=${plan.id}`}
              >
                {plan.cta} <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-intro" data-reveal>
          <div className="section-label"><span>{t.faq.sectionNumber}</span> {t.faq.label}</div>
          <h2>{t.faq.heading}</h2>
          <p>{t.faq.subheading}</p>
          <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
            <a className="text-link" href="https://wa.me/6285284229998?text=Hi%20ThinkNao!%20I%20have%20a%20question%20about%20the%20subscription%20plans." target="_blank" rel="noreferrer">{t.faq.askWhatsapp} <ArrowRight size={16} /></a>
            <a className="text-link" href="mailto:naogroup2026@gmail.com">{t.faq.askEmail} <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="faq-list" data-reveal>
          {t.faq.items.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={index}>
                <button
                  className="faq-question"
                  id={`faq-question-${index}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.question}</strong><ChevronDown size={19} />
                </button>
                <div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} aria-hidden={!isOpen}>
                  <div><p>{faq.answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <NaoFooter />
    </main>
  );
}

export function ThinkNaoLanding() {
  return <ThinkNaoLandingInner />;
}
