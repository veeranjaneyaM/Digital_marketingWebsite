type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
      <div className="relative mx-auto w-[min(1180px,calc(100%-1.5rem))] py-20">
        <div className="grid items-end gap-10 rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,250,255,0.98))] px-7 py-10 shadow-[0_24px_90px_rgba(148,163,184,0.16)] md:px-10 md:py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-ui text-[11px] uppercase tracking-[0.46em] text-[#2563eb]">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.02] text-slate-950 md:text-5xl lg:text-[4.2rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              {description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {["Premium positioning", "Performance systems", "Clearer reporting"].map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-slate-200 bg-white px-5 py-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#2563eb]">Focus</p>
                <p className="mt-3 text-base text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
