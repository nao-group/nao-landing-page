"use client";

import { ArrowRight, Check } from "lucide-react";

const MEMBER_URL = process.env.NEXT_PUBLIC_MEMBER_URL ?? "https://thinknao-web.vercel.app";

const freeAccess = [
  "10 fixed questions total across all subjects",
  "1 topic per subject",
  "1 mock exam",
  "3 chatbot conversations total",
  "Fixed questions only — no random generation",
  "Same problem sets for every free member",
];

const subscribedAccess = [
  "Unlimited practice questions",
  "Unlimited mock exams",
  "50 chatbot conversations/day",
];

const plans = [
  {
    id: "THINK-FREE-TRIAL",
    duration: "Free Trial",
    pricePerMonth: 0,
    totalPrice: 0,
    billingNote: "7 days, no payment required",
    badge: null,
    popular: false,
    features: freeAccess,
  },
  {
    id: "THINK-1MONTH",
    duration: "1 Month",
    pricePerMonth: 99000,
    totalPrice: 99000,
    billingNote: "One-time payment of Rp99.000 for 1 month access",
    badge: null,
    popular: false,
    features: subscribedAccess,
  },
  {
    id: "THINK-3MONTH",
    duration: "3 Months",
    pricePerMonth: 89700,
    totalPrice: 269000,
    billingNote: "One-time payment of Rp269.000 for 3 months access",
    badge: "Save 9%",
    popular: true,
    features: subscribedAccess,
  },
  {
    id: "THINK-6MONTH",
    duration: "6 Months",
    pricePerMonth: 83200,
    totalPrice: 499000,
    billingNote: "One-time payment of Rp499.000 for 6 months access",
    badge: "Save 16%",
    popular: false,
    features: subscribedAccess,
  },
];

function formatIDR(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Pricing
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#0F172A] mb-6">
            Simple, transparent
            <br />
            <span className="text-[#D4A017]">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Full access to everything ThinkNAO offers. Pick the commitment that works for you — no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {plans.map((plan, idx) => (
            <div
              key={plan.id}
              className={`relative p-8 lg:p-12 bg-background rounded-2xl border transition-all duration-300 hover:shadow-[0_0_0_1px_#D4A017,0_12px_40px_rgba(212,160,23,0.1)] ${
                plan.popular
                  ? "md:-my-4 md:py-12 lg:py-16 border-2 border-[#0F172A] hover:border-[#D4A017]"
                  : "border-foreground/10 hover:border-[#D4A017]"
              }`}
            >
              {plan.badge && (
                <span className={`absolute -top-3 left-8 px-3 py-1 text-xs font-mono uppercase tracking-widest ${
                  plan.popular
                    ? "bg-[#0F172A] text-white"
                    : "bg-[#D4A017] text-[#0F172A]"
                }`}>
                  {plan.badge}
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-bold text-3xl text-[#0F172A] mt-2">{plan.duration}</h3>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-4xl lg:text-5xl text-[#0F172A]">
                    {plan.id === "THINK-FREE-TRIAL" ? "Free" : formatIDR(plan.pricePerMonth)}
                  </span>
                </div>
                {plan.id !== "THINK-FREE-TRIAL" && <span className="text-sm text-muted-foreground mt-1 block">/month</span>}
                {plan.billingNote && (
                  <span className="text-xs font-mono text-muted-foreground mt-1 block">
                    {plan.billingNote}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#D4A017] mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.id === "THINK-FREE-TRIAL"
                  ? `${MEMBER_URL}/register?redirect=${encodeURIComponent("/onboarding")}`
                  : `${MEMBER_URL}/checkout?plan=${plan.id}`}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ease-out group hover:scale-[1.03] active:scale-[0.97] ${
                  plan.popular
                    ? "bg-[#0F172A] text-white hover:bg-[#0F172A]/90 hover:shadow-[0_0_0_2px_#D4A017,0_6px_20px_rgba(212,160,23,0.18)]"
                    : "border border-foreground/20 text-[#0F172A] hover:border-[#D4A017] hover:bg-[#FFFCF4] hover:shadow-[0_0_0_1px_#D4A017]"
                }`}
              >
                Get started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Subscription purchases are one-time payments. Access ends automatically when the selected period finishes.
        </p>
      </div>
    </section>
  );
}
