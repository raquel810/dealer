import { Download, FileText } from 'lucide-react';

interface DownloadCard {
  brand: string;
  subtitle: string;
  fontClass: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  href: string | null;
}

const cards: DownloadCard[] = [
  {
    brand: 'HARRIS',
    subtitle: 'Full Custom Framed & Inset',
    fontClass: 'font-harris-serif',
    accentText: 'text-harris-accent',
    accentBg: 'bg-harris-accent',
    accentBorder: 'border-harris-accent',
    href: '/docs/Harris-Cabinetry_view.pdf',
  },
  {
    brand: 'HINGE',
    subtitle: 'Full Custom Frameless',
    fontClass: 'font-hinge-sans',
    accentText: 'text-hinge-accent',
    accentBg: 'bg-hinge-accent',
    accentBorder: 'border-hinge-accent',
    href: '/docs/hingecabinetry_view.pdf',
  },
];

export default function Downloads() {
  return (
    <section id="downloads" className="py-20 sm:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Literature
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif">
            Specification Literature
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Current product documentation for specification and client presentation.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.brand}
              className="group rounded-xl border border-zinc-200 hover:border-zinc-300 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-[3/4] bg-zinc-50 flex flex-col items-center justify-center p-8">
                <FileText className={`w-16 h-16 ${card.accentText} opacity-30 mb-4`} />
                <p className={`text-sm ${card.accentText} opacity-50 text-center`}>
                  {card.href ? 'PDF Available' : 'PDF coming soon'}
                </p>
              </div>

              {/* Info */}
              <div className="p-6 border-t border-zinc-100">
                <h3 className={`text-xl font-bold text-zinc-900 ${card.fontClass} mb-1`}>
                  {card.brand}
                </h3>
                <p className="text-sm text-zinc-500 mb-5">{card.subtitle}</p>

                {card.href ? (
                  <a
                    href={card.href}
                    download
                    className={`inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-lg text-sm font-semibold text-white ${card.accentBg} hover:opacity-90 transition-opacity`}
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-lg text-sm font-semibold text-zinc-400 bg-zinc-100 cursor-not-allowed">
                    <Download className="w-4 h-4" />
                    PDF Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-400 mt-8">
          HINGE SELECT specifications available upon request—contact your studio representative.
        </p>
      </div>
    </section>
  );
}
