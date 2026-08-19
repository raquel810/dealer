import { useState } from 'react';
import { doorStyles } from '@/data/catalog';
import { X } from 'lucide-react';

const lineLabels: Record<string, { label: string; color: string }> = {
  harris: { label: 'HARRIS', color: 'bg-harris-accent' },
  hinge: { label: 'HINGE', color: 'bg-hinge-accent' },
  hingepro: { label: 'HINGE SELECT', color: 'bg-select-accent' },
};

export default function DoorStyles() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="door-styles" className="py-20 sm:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Door Collection
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif">
            Door Profiles
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Shared across HARRIS and HINGE specifications. HINGE SELECT offers the Duncan profile in any finish.
          </p>
        </div>

        {/* Door grid */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {doorStyles.map((door, i) => (
            <button
              key={door.name}
              onClick={() => setSelected(i)}
              className="group text-left rounded-xl bg-white border border-zinc-200 overflow-hidden hover:shadow-lg hover:border-zinc-300 transition-all duration-300"
            >
              <div className="aspect-square bg-zinc-100 overflow-hidden">
                {door.doorImage ? (
                  <img
                    src={door.doorImage}
                    alt={`${door.name} door style`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={door.profileImage}
                      alt={`${door.name} profile`}
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-semibold text-zinc-900 mb-2">
                  {door.name}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {door.lines.map((line) => (
                    <span
                      key={line}
                      className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold text-white ${lineLabels[line].color}`}
                    >
                      {lineLabels[line].label}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-zinc-600" />
            </button>

            <div className="flex flex-col sm:flex-row">
              {/* Door image */}
              <div className="sm:w-1/2 aspect-square bg-zinc-100">
                {doorStyles[selected].doorImage ? (
                  <img
                    src={doorStyles[selected].doorImage}
                    alt={doorStyles[selected].name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-50">
                    <p className="text-sm text-zinc-400">Door photo coming soon</p>
                  </div>
                )}
              </div>

              {/* Profile + info */}
              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-zinc-900 font-harris-serif mb-1">
                  {doorStyles[selected].name}
                </h3>
                <p className="text-sm text-zinc-500 mb-4">Door Style Profile</p>

                <div className="flex-1 bg-zinc-50 rounded-lg p-4 mb-4 flex items-center justify-center">
                  <img
                    src={doorStyles[selected].profileImage}
                    alt={`${doorStyles[selected].name} profile cutaway`}
                    className="max-h-48 object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Available On
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doorStyles[selected].lines.map((line) => (
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
          </div>
        </div>
      )}
    </section>
  );
}
