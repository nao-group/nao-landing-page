"use client";

import { useEffect } from "react";

const naoDetails = [
  ".nao-landscape-copy > *",
  ".nao-landscape-form-wrap .nao-form-card > *",
  ".nao-landscape-form-wrap .nao-form-card form > *",
  ".nao-photo-content > *",
  ".nao-photo-foot",
  ".nao-about-grid p",
  ".nao-about-grid .nao-inline-link",
  ".nao-products-head > div > *",
  ".nao-products-head > p",
  ".nao-card-top",
  ".nao-study-art",
  ".nao-think-art",
  ".nao-card-copy > *",
  ".nao-community-illustration",
  ".nao-community-copy > *",
  ".nao-vision-grid h2",
  ".nao-vision-graphic",
  ".nao-vision-list > div > *",
  ".nao-end-inner > *",
  ".nao-study-benefits > div > *",
  ".nao-benefit-grid article > *",
  ".nao-study-classes-head > *",
  ".nao-study-class-card > *",
  ".nao-study-compare-grid > div > *",
  ".nao-study-contact > div > *",
  ".nao-footer-grid > div",
].join(",");

const thinkDetails = [
  ".nao-photo-content > *",
  ".nao-photo-foot",
  ".section-heading > *",
  ".feature-copy > *",
  ".ai-visual",
  ".practice-visual",
  ".exam-visual",
  ".leaderboard-visual",
  ".subjects-header > *",
  ".subjects-strip > *",
  ".made-for-intro > *",
  ".audience-copy > *",
  ".testimonial-group:first-child figure",
  ".price-card > .popular-label",
  ".price-card > .price-head",
  ".price-card > .price",
  ".price-card > .plan-access",
  ".price-card > .button",
  ".faq-intro > *",
  ".faq-list > .faq-item",
  ".nao-footer-grid > div",
].join(",");

export function useScrollReveal(page: "nao" | "think") {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(page === "nao" ? ".nao-site" : ".site-shell");
    if (!root) return;

    const selector = page === "nao"
      ? `.nao-reveal,${naoDetails}`
      : `[data-reveal],${thinkDetails}`;
    const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = (element: HTMLElement) => {
      element.setAttribute("data-scroll-visible", "");
      element.classList.add("scroll-visible");
      if (element.classList.contains("nao-reveal")) element.classList.add("nao-shown");
      if (element.hasAttribute("data-reveal")) element.classList.add("is-visible");
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach(reveal);
      return;
    }

    const sectionCount = new Map<Element, number>();
    elements.forEach((element) => {
      const section = element.closest("section") ?? root;
      const index = sectionCount.get(section) ?? 0;
      sectionCount.set(section, index + 1);
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 85}ms`);
      if (!element.classList.contains("nao-reveal") && !element.hasAttribute("data-reveal")) {
        element.setAttribute("data-scroll-reveal", "");
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => elements.indexOf(a.target as HTMLElement) - elements.indexOf(b.target as HTMLElement))
        .forEach((entry) => {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [page]);
}
