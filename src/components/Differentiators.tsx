import { ShieldCheck, Users } from 'lucide-react';

const proprietaryStandards = [
  { title: 'IEPS Built In', description: 'Integrated End Panel Sizing included standard without surcharges.' },
  { title: 'Appliance Precision', description: 'Engineering accountability for exact appliance opening tolerances.' },
  { title: 'Private-Label Literature', description: 'Custom branding and collateral tailored to your design studio.' },
  { title: 'Regional Craftsmanship', description: 'Locally manufactured within 15 minutes of your showroom.' },
];

const benchmarkPerformance = [
  { title: 'Lifetime Coverage', description: 'Limited lifetime structural warranty.' },
  { title: 'Schedule Certainty', description: 'Contracted lead times built for project management predictability.' },
  { title: 'Adaptive Pricing', description: 'Transparent pricing models designed to maintain profitability.' },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="py-20 sm:py-28 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Competitive Positioning
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif">
            Proprietary Standards
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Structural and service differentiators that define the specification gap between our portfolio and the broader market.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Proprietary Standards */}
          <div className="rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900">Proprietary Standards</h3>
            </div>
            <ul className="space-y-5">
              {proprietaryStandards.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-800">{item.title}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Benchmark Performance */}
          <div className="rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900">Benchmark Performance</h3>
            </div>
            <ul className="space-y-5">
              {benchmarkPerformance.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-800">{item.title}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-zinc-400">
              These represent industry baseline expectations. The proprietary column defines where the specification conversation is won.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
