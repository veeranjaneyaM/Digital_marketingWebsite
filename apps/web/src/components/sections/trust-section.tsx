import { clientSignals, sectors, trustStats } from "@/lib/data";

export function TrustSection() {
  return (
    <section className="relative pb-20">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] space-y-8">
        <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_60px_rgba(148,163,184,0.12)] md:grid-cols-3">
          {trustStats.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 px-5 py-6 text-center md:text-left">
              <p className="font-display text-3xl text-slate-950">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="font-ui text-[11px] uppercase tracking-[0.42em] text-[#2563eb]">01 Industry Focus</p>
            <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Built for ambitious teams that want premium visibility and measurable growth.
            </h2>
            <p className="max-w-lg text-base leading-7 text-slate-600">
              Inspired by the clarity of the Escadrille structure, this section grounds the brand in real operating categories instead of vague promises.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(148,163,184,0.08)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Sector</p>
                <p className="mt-3 text-lg text-slate-800">{sector}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/82 px-5 py-4 shadow-[0_14px_40px_rgba(148,163,184,0.1)]">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {clientSignals.map((signal) => (
              <span key={signal} className="text-sm uppercase tracking-[0.26em] text-slate-500">
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
