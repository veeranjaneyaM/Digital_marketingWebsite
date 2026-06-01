import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const statRows = [
  { label: "Organic visibility", value: "172%", width: "72%" },
  { label: "Landing conversion", value: "84%", width: "84%" },
  { label: "Campaign efficiency", value: "91%", width: "91%" }
];

export function ResultsSection() {
  return (
    <section className="section-band-alt relative py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] space-y-14">
        <SectionHeading
          eyebrow="06 Results & Analytics"
          title="A reporting layer that feels as premium and precise as the brand itself."
          description="Instead of vague promises, the interface language here centers on dashboards, movement, attribution, and executive clarity."
        />

        <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(37,99,235,0.06),transparent_35%,rgba(124,58,237,0.08))]" />
            <div className="relative space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-ui text-xs uppercase tracking-[0.4em] text-[#2563eb]">Analytics Dashboard</p>
                  <h3 className="mt-3 font-display text-3xl text-slate-950">Performance translated into decisions.</h3>
                </div>
                <div className="kpi-badge rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em]">
                  Live
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50/70 p-5">
                <div className="grid gap-5 md:grid-cols-3">
                  {statRows.map((row) => (
                    <div key={row.label} className="rounded-[1.4rem] border border-slate-200 bg-white p-5">
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{row.label}</p>
                      <p className="mt-4 font-display text-4xl text-slate-950">{row.value}</p>
                      <div className="mt-4 h-1.5 rounded-full bg-slate-200">
                        <div className="data-line h-full rounded-full" style={{ width: row.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="metric-grid rounded-[1.6rem] border border-slate-200 bg-white p-5">
                  <div className="flex items-end justify-between gap-3">
                    {[28, 46, 39, 62, 71, 86, 94].map((height, index) => (
                      <div key={height} className="flex w-full flex-col items-center gap-3">
                        <div
                          className="w-6 rounded-full bg-[linear-gradient(180deg,rgba(37,99,235,0.95),rgba(6,182,212,0.4))]"
                          style={{ height: `${height * 1.2}px` }}
                        />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                          W{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-slate-200 bg-white p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#2563eb]">Executive summary</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Channels are benchmarked weekly against business targets, not vanity metrics, so teams can reallocate budget and creative effort with confidence.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-6">
            {[
              "Cross-channel attribution cleaned up for stronger budget decisions.",
              "Creative testing loops shortened with clearer reporting structure.",
              "Stakeholder updates reframed into concise, visually credible narratives."
            ].map((item) => (
              <GlassCard key={item}>
                <p className="text-base leading-7 text-slate-600">{item}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
