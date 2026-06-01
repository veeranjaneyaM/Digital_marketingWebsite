"use client";

import { FloatingScene } from "@/components/three/floating-scene";
import { BrandLockup } from "@/components/ui/brand-lockup";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { heroHighlights, heroMetrics, heroSignals } from "@/lib/data";

const heroVideo =
  "https://videos.pexels.com/video-files/34128979/14471961_3840_2160_30fps.mp4";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.08),transparent_24%),linear-gradient(90deg,rgba(251,253,255,0.96),rgba(251,253,255,0.84)_54%,rgba(251,253,255,0.92)),linear-gradient(180deg,rgba(255,255,255,0.4),rgba(247,250,255,0.96))]" />
      <FloatingScene />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#eef4fa]" />

      <div className="relative mx-auto flex min-h-screen w-[min(1180px,calc(100%-1.5rem))] flex-col justify-center py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl self-center">
            <BrandLockup className="mb-8" />

            <div className="animate-fade-up inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 backdrop-blur-xl">
              <p className="font-ui text-[11px] uppercase tracking-[0.42em] text-[#2563eb]">
                Premium Digital Growth Consultancy
              </p>
            </div>

            <h1 className="animate-fade-up mt-7 max-w-5xl font-display text-4xl font-semibold leading-[1.02] tracking-tight text-slate-950 md:text-6xl lg:text-[5rem]" style={{ animationDelay: "80ms" }}>
              Elevate Your Brand with <span className="text-gradient">Data-Driven Digital Growth</span>
            </h1>

            <p className="animate-fade-up mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8" style={{ animationDelay: "160ms" }}>
              Helping businesses, startups, creators, and NGOs grow through SEO, branding, performance marketing, and digital strategy.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {heroSignals.map((signal) => (
                <span key={signal} className="spec-chip rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-700">
                  {signal}
                </span>
              ))}
            </div>

            <div className="animate-fade-up mt-9 flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
              <MagneticButton href="/consultation" label="Book Consultation" />
              <MagneticButton href="/services" label="Explore Services" variant="secondary" />
              <MagneticButton href="/portfolio" label="View Work" variant="secondary" />
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {heroHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className="animate-fade-up rounded-[1.7rem] border border-slate-200 bg-white/80 p-5 backdrop-blur-xl"
                  style={{ animationDelay: `${300 + index * 80}ms` }}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#2563eb]">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up surface-panel-strong rounded-[2rem] p-6 md:p-8" style={{ animationDelay: "220ms" }}>
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <div>
                <p className="font-ui text-[11px] uppercase tracking-[0.35em] text-[#2563eb]">Growth Command Center</p>
                <p className="mt-2 font-display text-xl text-slate-950 md:text-2xl">Live Performance Snapshot</p>
              </div>
              <div className="kpi-badge rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.25em]">
                Active
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {heroMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="animate-fade-up dashboard-card rounded-[1.5rem] p-5"
                  style={{ animationDelay: `${350 + index * 80}ms` }}
                >
                  <p className="font-display text-3xl text-slate-950 md:text-4xl">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-slate-500 md:text-xs">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="metric-grid mt-6 rounded-[1.6rem] border border-slate-200 bg-slate-50/90 p-5">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: "SEO", value: "Visibility rising" },
                  { label: "Paid", value: "CAC tightening" },
                  { label: "Brand", value: "Trust compounding" }
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-4">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#2563eb]">{item.label}</p>
                    <p className="mt-2 text-sm text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
