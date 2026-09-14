"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpenCheck,
  Bot,
  Check,
  ChevronDown,
  Clock3,
  Flame,
  GraduationCap,
  Heart,
  Languages,
  Menu,
  MessageCircle,
  Play,
  Quote,
  Sparkles,
  Target,
  Trophy,
  ThumbsUp,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import { LanguageProvider, useLanguage } from "@/lib/i18n/language-context";
import { LanguageSwitcher } from "./language-switcher";

// Static (non-text) configuration for subjects
const subjectConfig = [
  {
    id: "math",
    labelCn: "数学",
    gradient: "linear-gradient(150deg, #1c2d52 0%, #0f172a 100%)",
    symbol: "∑",
  },
  {
    id: "physics",
    labelCn: "物理",
    gradient: "linear-gradient(150deg, #0c3a50 0%, #071b28 100%)",
    symbol: "φ",
  },
  {
    id: "chemistry",
    labelCn: "化学",
    gradient: "linear-gradient(150deg, #301065 0%, #150830 100%)",
    symbol: "⬡",
  },
  {
    id: "stem-chinese",
    labelCn: "理科汉语",
    gradient: "linear-gradient(150deg, #8b1c1c 0%, #480e0e 100%)",
    symbol: "理",
  },
  {
    id: "humanities-chinese",
    labelCn: "文科汉语",
    gradient: "linear-gradient(150deg, #5c3208 0%, #2a1505 100%)",
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

function ProductDashboard() {
  const { t } = useLanguage();
  const d = t.dashboard;
  return (
    <div className="product-window" aria-label="ThinkNAO product preview">
      <div className="window-bar">
        <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        <span>app.thinknao.com</span>
        <div className="window-avatar">A</div>
      </div>
      <div className="dashboard-shell">
        <aside className="dashboard-sidebar">
          <Image src="/logo/nao_icon_dark.png" alt="" width={34} height={34} />
          <div className="sidebar-nav active"><BookOpenCheck size={16} /><span>{d.learn}</span></div>
          <div className="sidebar-nav"><Target size={16} /><span>{d.practice}</span></div>
          <div className="sidebar-nav"><Trophy size={16} /><span>{d.ranks}</span></div>
          <div className="sidebar-nav"><UserRound size={16} /><span>{d.profile}</span></div>
        </aside>
        <div className="dashboard-main">
          <header className="dashboard-header">
            <div>
              <span className="dashboard-kicker">{d.greeting}</span>
              <h3>{d.subtitle}</h3>
            </div>
            <div className="streak-pill"><Flame size={15} fill="currentColor" /> 12 {d.streak}</div>
          </header>
          <div className="dashboard-grid">
            <section className="continue-card">
              <div className="subject-icon"><Zap size={20} /></div>
              <div className="continue-copy">
                <span>{d.continueLabel}</span>
                <h4>{d.subject}</h4>
                <div className="progress-track"><i /></div>
                <small>{d.progressText}</small>
              </div>
              <button aria-label="Continue physics practice"><Play size={16} fill="currentColor" /></button>
            </section>
            <section className="mastery-card">
              <span>{d.weeklyMastery}</span>
              <div className="mastery-score"><strong>84</strong><small>/100</small></div>
              <div className="mini-bars" aria-hidden="true">
                {[34, 50, 42, 67, 58, 78, 84].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </section>
            <section className="topic-card">
              <div><Languages size={18} /><span>{d.chineseTopic}</span></div>
              <strong>{d.chineseTime}</strong>
              <small>{d.chineseDetail}</small>
            </section>
            <section className="topic-card muted-topic">
              <div><Target size={18} /><span>{d.mathsTopic}</span></div>
              <strong>{d.mathsLabel}</strong>
              <small>{d.mathsDetail}</small>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSubject, setActiveSubject] = useState<string>("math");
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: "-7% 0px -7%" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => revealObserver.observe(element));

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
      hero.style.setProperty("--hero-scroll", progress.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

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

  const audiences = audienceConfig.map((cfg, i) => ({
    ...cfg,
    title: t.madeFor.audiences[i].title,
    body: t.madeFor.audiences[i].body,
    benefits: t.madeFor.audiences[i].benefits,
  }));

  return (
    <main id="main-content" className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="ThinkNAO home">
          <Image src="/logo/think_nao_dark.png" alt="ThinkNAO" width={142} height={36} priority />
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#features" onClick={closeMenu}>{t.nav.features}</a>
          <a href="#community" onClick={closeMenu}>{t.nav.community}</a>
          <a href="#pricing" onClick={closeMenu}>{t.nav.pricing}</a>
          <a href="#faq" onClick={closeMenu}>{t.nav.faq}</a>
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

      <section className="hero" id="top" ref={heroRef}>
        <div className="hero-sticky">
          <Image className="hero-background" src="/images/hero/china-background.webp" alt="Illustrated Chinese mountains, the Temple of Heaven, the Great Wall, and a distant skyline" fill sizes="100vw" priority />
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-copy">
            <h1>{t.hero.title1}<br /><span className="hero-connector">{t.hero.titleConnector}{t.hero.titleConnector ? "\u00a0" : ""}</span><span>{t.hero.title2}</span></h1>
            <p>{t.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="button" href="#pricing">{t.hero.ctaPrimary} <ArrowRight size={18} /></a>
              <a className="text-link" href="#features"><Play size={16} fill="currentColor" /> {t.hero.ctaSecondary}</a>
            </div>
          </div>
          <div className="dashboard-stage">
            <div className="floating-chip floating-chip-left"><div><Target size={18} /></div><span><small>{t.hero.accuracyLabel}</small><strong>{t.hero.accuracyValue}</strong></span></div>
            <ProductDashboard />
            <div className="floating-chip floating-chip-right"><div><Award size={18} /></div><span><small>{t.hero.achievementLabel}</small><strong>{t.hero.achievementValue}</strong></span></div>
          </div>
          <Image className="great-wall" src="/images/hero/great-wall-layer.png" alt="" fill sizes="100vw" priority aria-hidden="true" />
          <a className="scroll-cue" href="#trust" aria-label="Scroll to reveal the ThinkNAO dashboard"><span>{t.hero.scrollCue}</span><i><ChevronDown size={15} /></i></a>
        </div>
      </section>

      <section className="trust-strip" id="trust" aria-label="Platform highlights">
        <p>{t.trust.headline}</p>
        <div className="trust-items">
          <span><Check /> {t.trust.verified}</span>
          <span><Languages /> {t.trust.bilingual}</span>
          <span><Sparkles /> {t.trust.unlimited}</span>
          <span><Target /> {t.trust.adaptive}</span>
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
          onMouseLeave={() => setActiveSubject("math")}
        >
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`subject-card${activeSubject === subject.id ? " is-active" : ""}`}
              style={{ "--subject-gradient": subject.gradient } as React.CSSProperties}
              onMouseEnter={() => setActiveSubject(subject.id)}
              onFocus={() => setActiveSubject(subject.id)}
              tabIndex={0}
              role="button"
              aria-label={subject.label}
            >
              <div className="subject-bg" aria-hidden="true" />
              <span className="subject-symbol" aria-hidden="true">{subject.symbol}</span>

              <div className="subject-collapsed" aria-hidden={activeSubject === subject.id}>
                <span className={`subject-label-vertical${language === "zh" ? " subject-label-vertical--cjk" : ""}`}>{subject.label}</span>
              </div>

              <div className="subject-expanded" aria-hidden={activeSubject !== subject.id}>
                <div className="subject-arrow"><ArrowUpRight size={16} /></div>
                <div className="subject-expanded-copy">
                  <span className="subject-cn" style={language === "zh" ? { display: "none" } : undefined}>{subject.labelCn}</span>
                  <h3>{subject.label}</h3>
                  <p>{subject.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community-section section" id="community" data-reveal>
        <div className="community-banner">
          <div className="community-illustration">
            <Image src="/images/community/discord-group.png" alt="Five ThinkNAO learners studying and talking together" width={1719} height={915} sizes="(max-width: 820px) 90vw, 340px" />
            <span className="social-bubble bubble-heart"><Heart size={15} fill="currentColor" /></span>
            <span className="social-bubble bubble-like"><ThumbsUp size={15} fill="currentColor" /></span>
            <span className="social-bubble bubble-chat"><MessageCircle size={15} /></span>
          </div>
          <div className="community-copy">
            <div className="discord-mark"><Image src="/images/community/discord.svg" alt="Discord Logo" width={40} height={40} /></div>
            <div>
              <div className="section-label"><span>{t.community.sectionNumber}</span> {t.community.label}</div>
              <h2>{t.community.heading}</h2>
              <p>{t.community.body}</p>
            </div>
          </div>
          <div className="community-actions">
            <div className="community-avatars" aria-label="Community members"><i>NA</i><i>KW</i><i>FT</i><i>RA</i></div>
            <span className="online-pill"><span className="live-dot" /> 2.6k {t.community.online}</span>
            <a className="button discord-button" href="https://discord.com" target="_blank" rel="noreferrer">{t.community.joinDiscord} <ArrowRight size={18} /></a>
          </div>
        </div>
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

      <section className="testimonials-section">
        <div className="testimonials-landscape" aria-hidden="true" />
        <div className="section testimonials-inner">
          <div className="section-heading split-heading testimonials-heading" data-reveal>
            <div><span className="section-number">{t.testimonials.sectionNumber}</span><p>{t.testimonials.label}</p></div>
            <h2>{t.testimonials.heading1}<br /><em>{t.testimonials.heading2}</em></h2>
            <div className="rating-block"><strong>4.9</strong><span>★★★★★</span><small>{t.testimonials.ratingLabel}</small></div>
          </div>
          <div className="testimonial-marquee" data-reveal>
            <div className="testimonial-track">
              {[0, 1].map((groupIndex) => (
                <div className="testimonial-group" key={groupIndex} aria-hidden={groupIndex === 1 ? "true" : undefined}>
                  {t.testimonials.items.map((testimonial) => (
                    <figure key={`${groupIndex}-${testimonial.name}`}>
                      <Quote size={24} />
                      <blockquote>"{testimonial.quote}"</blockquote>
                      <figcaption><i>{testimonial.initials}</i><div><strong>{testimonial.name}</strong><span>{testimonial.detail}</span></div></figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="section-heading centered-heading" data-reveal>
          <div className="section-label"><span>{t.pricing.sectionNumber}</span> {t.pricing.label}</div>
          <h2>{t.pricing.heading1}<br /><em>{t.pricing.heading2}</em></h2>
          <p>{t.pricing.subheading}</p>
        </div>
        <div className="pricing-grid">
          {t.pricing.plans.map((plan) => (
            <article key={plan.id} className={`price-card${plan.popular ? " price-featured" : ""}`} data-reveal>
              {plan.savingsBadge && (
                <div className="popular-label"><Sparkles size={14} /> {plan.savingsBadge}</div>
              )}
              <div className="price-head"><span>{plan.name}</span></div>
              <div className="price">
                {plan.id !== "THINK-FREE-TRIAL" && <small>Rp</small>}
                <strong>{plan.price}</strong>
                {plan.id !== "THINK-FREE-TRIAL" && <span>{t.pricing.perMonth}</span>}
              </div>
              {plan.billingNote && <p style={{fontSize:"0.65rem",color:"var(--muted)",margin:"-10px 0 14px",letterSpacing:"0.02em"}}>{plan.billingNote}</p>}
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
            <a className="text-link" href="https://wa.me/6285284229998?text=Hi%20ThinkNao!%20I%20have%20a%20question%20about%20the%20subscription%20plans." target="_blank" rel="noreferrer">Ask us via WhatsApp <ArrowRight size={16} /></a>
            <a className="text-link" href="mailto:naogroup2026@gmail.com">Ask us via Email <ArrowRight size={16} /></a>
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

      <footer className="site-footer">
        <Image className="footer-landscape" src="/images/hero/china-background.webp" alt="" fill sizes="100vw" aria-hidden="true" />
        <div className="footer-overlay" aria-hidden="true" />
        <div className="footer-content">
          <div className="footer-cta" data-reveal>
            <span>{t.footer.tagline}</span>
            <h2>{t.footer.heading1}<br />{t.footer.heading2}</h2>
            <a className="button button-cream" href="#pricing">{t.footer.cta} <ArrowRight size={18} /></a>
          </div>
          <div className="footer-bottom">
            <div className="footer-brand-stack">
              <Image src="/logo/think_nao_light.png" alt="ThinkNAO" width={156} height={40} />
              <div className="supported-by">
                <span>Supported by</span>
                <Image src="/logo/nao_full_dark.png" alt="NAO Group" width={91} height={31} />
              </div>
            </div>
            <div>
              <a href="#features">{t.footer.links.features}</a>
              <a href="#community">{t.footer.links.community}</a>
              <a href="#pricing">{t.footer.links.pricing}</a>
              <a href="#faq">{t.footer.links.faq}</a>
            </div>
            <span>© {new Date().getFullYear()} ThinkNAO. {t.footer.copyright}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export function ThinkNaoLanding() {
  return (
    <LanguageProvider>
      <ThinkNaoLandingInner />
    </LanguageProvider>
  );
}
