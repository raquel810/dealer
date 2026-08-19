import { useState } from 'react';
import { comparisonData, productLines } from '@/data/lines';
import { Check, Minus } from 'lucide-react';

const headers = productLines.map((l) => ({
  id: l.id,
  name: l.name,
  style: l.style,
  leadTime: l.leadTime,
  fontClass: l.fontClass,
  accentText: l.accentText,
  accentBg: l.accentBg,
  accentBorder: l.accentBorder,
}));

function CellContent({ value }: { value: string }) {
  if (value === 'Yes') return <Check className="w-5 h-5 text-emerald-500" />;
  if (value === '--' || value === '\u2014') return <Minus className="w-4 h-4 text-zinc-300" />;
  return <span>{value}</span>;
}

function RowLabel({ category }: { category: string }) {
  if (category === 'OptiFit Integration') {
    return (
      <a
        href="#optifit"
        className="text-sm font-semibold text-zinc-700 hover:text-harris-accent transition-colors underline decoration-zinc-300 underline-offset-2 hover:decoration-harris-accent"
      >
        {category} &rarr;
      </a>
    );
  }
  return <span className="text-sm font-semibold text-zinc-700">{category}</span>;
}

export default function ComparisonMatrix() {
  const [mobileCol, setMobileCol] = useState(0);

  return (
    <section id="comparison" className="py-20 sm:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Specification Comparison
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif">
            Side by Side
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            A comprehensive specification matrix for aligning construction method to project requirements.
          </p>
        </div>

        {/* Mobile column picker */}
        <div className="flex gap-2 mb-6 lg:hidden overflow-x-auto pb-2">
          {headers.map((h, i) => (
            <button
              key={h.id}
              onClick={() => setMobileCol(i)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                mobileCol === i
                  ? `${h.accentBg} text-white`
                  : 'bg-white text-zinc-500 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block rounded-xl border border-zinc-200 overflow-hidden bg-white shadow-sm">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-48 p-5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-50 border-b border-zinc-200">
                  Feature
                </th>
                {headers.map((h) => (
                  <th
                    key={h.id}
                    className="p-5 text-left border-b border-zinc-200 bg-zinc-50"
                  >
                    <span className={`block text-lg font-bold ${h.accentText} ${h.fontClass}`}>
                      {h.name}
                    </span>
                    <span className="block text-xs text-zinc-400 mt-0.5">{h.leadTime}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr
                  key={row.category}
                  className={`${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'} hover:bg-zinc-50 transition-colors`}
                >
                  <td className="p-5 border-r border-zinc-100">
                    <RowLabel category={row.category} />
                  </td>
                  <td className="p-5 text-sm text-zinc-600 border-r border-zinc-100">
                    <CellContent value={row.harris} />
                  </td>
                  <td className="p-5 text-sm text-zinc-600 border-r border-zinc-100">
                    <CellContent value={row.hinge} />
                  </td>
                  <td className="p-5 text-sm text-zinc-600">
                    <CellContent value={row.hingepro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card view */}
        <div className="lg:hidden space-y-3">
          {comparisonData.map((row) => {
            const values = [row.harris, row.hinge, row.hingepro];
            return (
              <div
                key={row.category}
                className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-1.5">
                  <RowLabel category={row.category} />
                </div>
                <div className="text-sm text-zinc-700">
                  <CellContent value={values[mobileCol]} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
