import { useState } from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';

export default function MarginCalculator() {
  const [orderSize, setOrderSize] = useState(28000);
  const ourFeeRate = 0.04;
  const clientRate = 0.18;

  const ourFee = orderSize * ourFeeRate;
  const youCharge = orderSize * clientRate;
  const youKeep = youCharge - ourFee;
  const tenJobs = youKeep * 10;

  function formatCurrency(n: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
  }

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Financial Yield
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif">
            Color Drop Program
          </h2>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">
            Bespoke color matching for any Sherwin-Williams or Benjamin Moore finish.
            Sourced at 3–5%, realized at 10–25%—capturing the margin gap on every custom specification.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-10 shadow-sm">
          {/* Slider input */}
          <div className="mb-10">
            <label className="block text-sm font-semibold text-zinc-700 mb-3">
              Cabinet Order Volume
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={10000}
                max={100000}
                step={1000}
                value={orderSize}
                onChange={(e) => setOrderSize(Number(e.target.value))}
                className="flex-1 h-2 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-harris-accent"
              />
              <span className="text-2xl font-bold text-zinc-900 tabular-nums w-36 text-right">
                {formatCurrency(orderSize)}
              </span>
            </div>
            <div className="flex justify-between text-xs text-zinc-400 mt-1">
              <span>$10,000</span>
              <span>$100,000</span>
            </div>
          </div>

          {/* Results grid */}
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            <div className="rounded-xl bg-white border border-zinc-200 p-5 text-center">
              <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-4 h-4 text-zinc-500" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                Harris Finish Surcharge (4%)
              </p>
              <p className="text-xl font-bold text-zinc-700 tabular-nums">
                {formatCurrency(ourFee)}
              </p>
            </div>

            <div className="rounded-xl bg-white border border-zinc-200 p-5 text-center">
              <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-4 h-4 text-zinc-500" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                Market Realization (18%)
              </p>
              <p className="text-xl font-bold text-zinc-700 tabular-nums">
                {formatCurrency(youCharge)}
              </p>
            </div>

            <div className="rounded-xl bg-white border border-emerald-200 bg-emerald-50/50 p-5 text-center">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-1">
                Net Retained Margin per Project
              </p>
              <p className="text-2xl font-bold text-emerald-700 tabular-nums">
                {formatCurrency(youKeep)}
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-xl bg-zinc-900 text-white p-5 sm:p-6 text-center">
            <p className="text-sm sm:text-base leading-relaxed">
              Based on ten projects annually at this scale, this program generates{' '}
              <span className="font-bold text-emerald-400">{formatCurrency(tenJobs)}</span>{' '}
              in net retained revenue on standard finish specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
