"use client";

const crystals = [
  { top: "12%", left: "14%", size: "5.5rem", color: "#7c8cff", delay: 0 },
  { top: "18%", right: "10%", size: "3.75rem", color: "#8fe6ff", delay: 1.2 },
  { bottom: "16%", left: "30%", size: "4.75rem", color: "#dbe8ff", delay: 2.1 }
] as const;

export function FloatingScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.16),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(167,139,250,0.14),transparent_24%)]" />

      <div className="absolute right-[-8%] top-[6%] h-[34rem] w-[34rem] opacity-70 md:right-[2%] md:top-[10%] md:h-[38rem] md:w-[38rem]">
        <div className="absolute inset-[12%] rounded-full border border-[#7baeff]/30 animate-spin-slow" />
        <div className="absolute inset-[25%] rounded-full border border-[#8fe6ff]/25 animate-spin-reverse" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),rgba(125,211,252,0.06)_34%,transparent_62%)]" />

        {crystals.map((crystal) => (
          <div
            key={`${crystal.color}-${crystal.size}`}
            className="animate-float-gentle absolute"
            style={{ ...crystal, animationDelay: `${crystal.delay}s` }}
          >
            <div
              className="rotate-45 rounded-[1.4rem] shadow-[0_20px_40px_rgba(148,163,184,0.18)]"
              style={{
                width: crystal.size,
                height: crystal.size,
                background: `linear-gradient(145deg, ${crystal.color}, rgba(255,255,255,0.92))`,
                opacity: 0.82
              }}
            />
          </div>
        ))}
      </div>

      <div className="animate-float-gentle absolute left-[8%] top-[22%] hidden rounded-[1.8rem] border border-slate-200 bg-white/88 p-4 shadow-[0_20px_40px_rgba(148,163,184,0.18)] backdrop-blur-2xl md:block">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#2563eb]">Search Visibility</p>
        <p className="mt-3 text-2xl font-semibold text-slate-950">+241%</p>
        <div className="mt-4 h-1.5 w-32 overflow-hidden rounded-full bg-slate-200">
          <div className="data-line h-full w-[74%] rounded-full" />
        </div>
      </div>

      <div className="animate-float-gentle absolute bottom-[18%] right-[8%] hidden rounded-[1.8rem] border border-slate-200 bg-white/88 p-4 shadow-[0_20px_40px_rgba(148,163,184,0.18)] backdrop-blur-2xl lg:block" style={{ animationDelay: "1.2s" }}>
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#2563eb]">Campaign Velocity</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">Creative, paid, and reporting loops aligned weekly.</p>
      </div>
    </div>
  );
}
