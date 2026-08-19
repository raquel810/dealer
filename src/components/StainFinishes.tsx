import { useState } from 'react';
import { stainFinishes } from '@/data/catalog';
import { X } from 'lucide-react';

const lineLabels: Record<string, { label: string; color: string }> = {
  harris: { label: 'HARRIS', color: 'bg-harris-accent' },
  hinge: { label: 'HINGE', color: 'bg-hinge-accent' },
  hingepro: { label: 'HINGE SELECT', color: 'bg-select-accent' },
};

export default function StainFinishes() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="finishes" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Finish Library
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif">
            Stain Finishes
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Available on HARRIS and HINGE specifications. HINGE SELECT offers full stain availability upon request.
          </p>
        </div>

        {/* Swatch grid */}
        <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
          {stainFinishes.map((stain, i) => (
            <button
              key={stain.name}
              onClick={() => setSelected(i)}
              className="group text-left rounded-xl overflow-hidden bg-zinc-50 border border-zinc-200 hover:shadow-lg hover:border-zinc-300 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={stain.image}
                  alt={`${stain.name} stain`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2.5 sm:p-3 text-center">
                <p className="text-xs sm:text-sm font-semibold text-zinc-800">{stain.name}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-400 mt-8">
          Paint finishes and ColorDrop custom matching also available\u2014see the comparison table for full details.
        </p>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-zinc-600" />
            </button>

            <div className="aspect-square">
              <img
                src={stainFinishes[selected].image}
                alt={stainFinishes[selected].name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">
                {stainFinishes[selected].name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Available On
              </p>
              <div className="flex flex-wrap gap-2">
                {stainFinishes[selected].lines.map((line) => (
                  <span
                    key={line}
                    className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold text-white ${lineLabels[line].color}`}
                  >
                    {lineLabels[line].label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
